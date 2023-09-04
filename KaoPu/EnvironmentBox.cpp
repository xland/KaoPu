#include "EnvironmentBox.h"
using namespace Microsoft::WRL;

namespace {
    static EnvironmentBox* env;
}


void EnvironmentBox::Init(const std::function<void()> func)
{
    if (env) {
        return;
    }
    env = new EnvironmentBox();
    env->ensureAppFolder();
    env->func = func;
    //auto envCBInstance = Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(pageEnv, &PageEnvironment::callBack);
    //HRESULT result = CreateCoreWebView2EnvironmentWithOptions(nullptr, nullptr, nullptr, envCBInstance.Get());
    std::wstring m_userDataFolder = L"C:\\MyAppUserDataFolder";
    HRESULT hr = CreateCoreWebView2EnvironmentWithOptions(
        NULL, m_userDataFolder.c_str(), nullptr,
        Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(env, &EnvironmentBox::callBack).Get());
}

void EnvironmentBox::ensureAppFolder() {
    std::filesystem::path path;
    PWSTR path_tmp;
    auto get_folder_path_ret = SHGetKnownFolderPath(FOLDERID_RoamingAppData, 0, nullptr, &path_tmp);
    if (get_folder_path_ret != S_OK) {
        CoTaskMemFree(path_tmp);
        auto result = MessageBox(nullptr, L"未找到系统应用程序目录AppData，即将退出",
            L"系统提示", MB_OK | MB_ICONINFORMATION | MB_DEFBUTTON1);
        exit(1);
        return;
    }
    path = path_tmp;
    CoTaskMemFree(path_tmp);
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