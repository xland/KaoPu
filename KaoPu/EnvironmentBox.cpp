#include "EnvironmentBox.h"
using namespace Microsoft::WRL;

namespace {
    static EnvironmentBox* env;
}

EnvironmentBox* EnvironmentBox::Get()
{
    return env;
}
bool EnvironmentBox::Init(const std::function<void()> func)
{
    if (env) {
        return true;
    }
    env = new EnvironmentBox();
    if (!env->checkRuntime()) {
        return false;
    }
    auto path = env->ensureAppFolder();
    if (path.empty()) {
        return false;
    }
    env->func = func;
    //auto options = Microsoft::WRL::Make<CoreWebView2EnvironmentOptions>();
    //options->put_AdditionalBrowserArguments(L"--allow-file-access-from-files");
    //Microsoft::WRL::ComPtr<ICoreWebView2EnvironmentOptions4> options4;
    //HRESULT oeResult = options.As(&options4);
    //if (oeResult != S_OK) {
    //    // UNREACHABLE - cannot continue  todo
    //}
    //const WCHAR* allowedSchemeOrigins[5] = { L"about://*", L"http://*", L"https://*", L"file://*", L"socket://*" };
    //auto defaultRegistration = Microsoft::WRL::Make<CoreWebView2CustomSchemeRegistration>(L"kp");
    //defaultRegistration->put_HasAuthorityComponent(TRUE);
    //defaultRegistration->put_TreatAsSecure(TRUE);
    //defaultRegistration->SetAllowedOrigins(5, allowedSchemeOrigins);
    //ICoreWebView2CustomSchemeRegistration* registrations[1] = { defaultRegistration.Get() };
    //options4->SetCustomSchemeRegistrations(1, static_cast<ICoreWebView2CustomSchemeRegistration**>(registrations));
    auto envCBInstance = Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(env, &EnvironmentBox::callBack);
    HRESULT result = CreateCoreWebView2EnvironmentWithOptions(nullptr, path.c_str(), nullptr/*options.Get()*/, envCBInstance.Get());
    if (FAILED(result)) {
        return false;
    }
    return true;
}

std::filesystem::path EnvironmentBox::ensureAppFolder() {
    std::filesystem::path path;
    PWSTR pathTmp;
    auto ret = SHGetKnownFolderPath(FOLDERID_RoamingAppData, 0, nullptr, &pathTmp);
    if (ret != S_OK) {
        CoTaskMemFree(pathTmp);
        auto result = MessageBox(nullptr, L"未找到系统应用程序目录AppData，即将退出",
            L"系统提示", MB_OK | MB_ICONINFORMATION | MB_DEFBUTTON1);
        exit(1);
        return path;
    }
    path = pathTmp;
    CoTaskMemFree(pathTmp);
    path /= L"KaoPu";
    if (!std::filesystem::exists(path)) {
        auto flag = std::filesystem::create_directory(path);
        if (!flag) {
            MessageBox(nullptr, L"数据目录创建失败，即将退出",
                L"系统提示", MB_OK | MB_ICONINFORMATION | MB_DEFBUTTON1);
            exit(1);
        }
        auto a = 1;
    }
    return path;
}



bool EnvironmentBox::checkRegKey(const HKEY& key, const std::wstring& subKey) {
    size_t bufferSize = 20; //每位4个，共4位，加3个点，再多给一位，后面会截掉多余的
    std::wstring valueBuf;
    valueBuf.resize(bufferSize);
    auto valueSize = static_cast<DWORD>(bufferSize * sizeof(wchar_t));
    auto rc = RegGetValue(key, subKey.c_str(), L"pv", RRF_RT_REG_SZ, nullptr,
        static_cast<void*>(valueBuf.data()), &valueSize
    );
    if (rc == ERROR_SUCCESS)
    {
        valueSize /= sizeof(wchar_t);
        valueBuf.resize(static_cast<size_t>(valueSize - 1));//todo 这个版本号可能有用
        if (valueBuf.empty() || valueBuf == L"0.0.0.0") {
            return false;
        }
    }
    else
    {
        return false;
    }
    return true;
}

bool EnvironmentBox::checkRuntime()
{
    std::wstring regSubKey = L"\\Microsoft\\EdgeUpdate\\Clients\\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}";
    bool hasRuntime = checkRegKey(HKEY_LOCAL_MACHINE, L"SOFTWARE\\WOW6432Node" + regSubKey);
    if (hasRuntime) return true;
    hasRuntime = checkRegKey(HKEY_CURRENT_USER, L"Software" + regSubKey);
    if (!hasRuntime) {
        auto result = MessageBox(nullptr, L"您得系统中缺少必要组件，现在为您打开下载链接，下载相关组件？",
            L"系统提示", MB_OKCANCEL | MB_ICONINFORMATION | MB_DEFBUTTON1);
        if (result == IDOK) {
            ShellExecute(0, 0, L"https://go.microsoft.com/fwlink/p/?LinkId=2124703", 0, 0, SW_SHOW);
        }
        return false;
    }
    return true;
}

HRESULT EnvironmentBox::callBack(HRESULT result, ICoreWebView2Environment* env)
{
    this->Environment = env;
    func();
    return S_OK;
}