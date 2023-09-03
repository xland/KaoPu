#include "WindowBase.h"
#include <windowsx.h>
#include <wrl.h>
#include <wil/com.h>
#include <dwmapi.h>
#include "WebView2.h"

using namespace Microsoft::WRL;
// Pointer to WebViewController
static wil::com_ptr<ICoreWebView2Controller> webviewController;

// Pointer to WebView window
static wil::com_ptr<ICoreWebView2> webview;

WindowBase::WindowBase() {

}
WindowBase::~WindowBase()
{

}
void WindowBase::InitWindow(const int& x, const int& y, const long& w, const long& h, const std::wstring& title)
{
    this->x = x;
    this->y = y;
    this->w = w;
    this->h = h;
    static int num = 0;
    std::wstring className = std::format(L"Install_{}", num++);
    auto hinstance = GetModuleHandle(NULL);
    WNDCLASSEX wcx{};
    wcx.cbSize = sizeof(wcx);
    wcx.style = CS_HREDRAW | CS_VREDRAW;
    wcx.lpfnWndProc = &WindowBase::RouteWindowMessage;
    wcx.cbWndExtra = sizeof(WindowBase*);
    wcx.hInstance = hinstance;
    wcx.hIcon = LoadIcon(NULL, IDI_APPLICATION);
    wcx.hCursor = LoadCursor(NULL, IDC_ARROW);
    wcx.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
    wcx.lpszClassName = className.c_str();
    if (!RegisterClassEx(&wcx))
    {
        MessageBox(NULL, L"注册窗口类失败", L"系统提示", NULL);
        return;
    }
    hwnd = CreateWindowEx(NULL, wcx.lpszClassName, title.c_str(),
        WS_OVERLAPPEDWINDOW, x, y, w, h, NULL, NULL, hinstance, static_cast<LPVOID>(this));
    SetWindowPos(hwnd, nullptr, 0, 0, 0, 0, SWP_NOZORDER | SWP_NOOWNERZORDER | SWP_NOMOVE | SWP_NOSIZE | SWP_FRAMECHANGED);
    const MARGINS shadowState{ 1,1,1,1 };
    DwmExtendFrameIntoClientArea(hwnd, &shadowState);
}
void WindowBase::Show() {
    ShowWindow(hwnd, SW_SHOW);
    UpdateWindow(hwnd);

    CreateCoreWebView2EnvironmentWithOptions(nullptr, nullptr, nullptr,
        Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(
            [this](HRESULT result, ICoreWebView2Environment* env) -> HRESULT {

                // Create a CoreWebView2Controller and get the associated CoreWebView2 whose parent is the main window hWnd
                env->CreateCoreWebView2Controller(hwnd, Callback<ICoreWebView2CreateCoreWebView2ControllerCompletedHandler>(
                    [this](HRESULT result, ICoreWebView2Controller* controller) -> HRESULT {
                        if (controller != nullptr) {
                            webviewController = controller;
                            webviewController->get_CoreWebView2(&webview);
                        }

                        // Add a few settings for the webview
                        // The demo step is redundant since the values are the default settings
                        wil::com_ptr<ICoreWebView2Settings> settings;
                        webview->get_Settings(&settings);
                        settings->put_IsScriptEnabled(TRUE);
                        settings->put_AreDefaultScriptDialogsEnabled(TRUE);
                        settings->put_IsWebMessageEnabled(TRUE);

                        // Resize WebView to fit the bounds of the parent window
                        RECT bounds;
                        GetClientRect(hwnd, &bounds);
                        webviewController->put_Bounds(bounds);

                        // Schedule an async task to navigate to Bing
                        webview->Navigate(L"https://www.bing.com/");

                        // <NavigationEvents>
                        // Step 4 - Navigation events
                        // register an ICoreWebView2NavigationStartingEventHandler to cancel any non-https navigation
                        EventRegistrationToken token;
                        webview->add_NavigationStarting(Callback<ICoreWebView2NavigationStartingEventHandler>(
                            [](ICoreWebView2* webview, ICoreWebView2NavigationStartingEventArgs* args) -> HRESULT {
                                wil::unique_cotaskmem_string uri;
                                args->get_Uri(&uri);
                                std::wstring source(uri.get());
                                if (source.substr(0, 5) != L"https") {
                                    args->put_Cancel(true);
                                }
                                return S_OK;
                            }).Get(), &token);
                        // </NavigationEvents>

                        // <Scripting>
                        // Step 5 - Scripting
                        // Schedule an async task to add initialization script that freezes the Object object
                        webview->AddScriptToExecuteOnDocumentCreated(L"Object.freeze(Object);", nullptr);
                        // Schedule an async task to get the document URL
                        webview->ExecuteScript(L"window.document.URL;", Callback<ICoreWebView2ExecuteScriptCompletedHandler>(
                            [](HRESULT errorCode, LPCWSTR resultObjectAsJson) -> HRESULT {
                                LPCWSTR URL = resultObjectAsJson;
                                //doSomethingWithURL(URL);
                                return S_OK;
                            }).Get());
                        // </Scripting>

                        // <CommunicationHostWeb>
                        // Step 6 - Communication between host and web content
                        // Set an event handler for the host to return received message back to the web content
                        webview->add_WebMessageReceived(Callback<ICoreWebView2WebMessageReceivedEventHandler>(
                            [](ICoreWebView2* webview, ICoreWebView2WebMessageReceivedEventArgs* args) -> HRESULT {
                                wil::unique_cotaskmem_string message;
                                args->TryGetWebMessageAsString(&message);
                                // processMessage(&message);
                                webview->PostWebMessageAsString(message.get());
                                return S_OK;
                            }).Get(), &token);

                        // Schedule an async task to add initialization script that
                        // 1) Add an listener to print message from the host
                        // 2) Post document URL to the host
                        webview->AddScriptToExecuteOnDocumentCreated(
                            L"window.chrome.webview.addEventListener(\'message\', event => alert(event.data));" \
                            L"window.chrome.webview.postMessage(window.document.URL);",
                            nullptr);
                        // </CommunicationHostWeb>

                        return S_OK;
                    }).Get());
                return S_OK;
            }).Get());
}

LRESULT CALLBACK WindowBase::RouteWindowMessage(HWND hWnd, UINT msg, WPARAM wParam, LPARAM lParam) {
    if (msg == WM_NCCREATE)
    {
        CREATESTRUCT* pCS = reinterpret_cast<CREATESTRUCT*>(lParam);
        LPVOID pThis = pCS->lpCreateParams;
        SetWindowLongPtr(hWnd, GWLP_USERDATA, reinterpret_cast<LONG_PTR>(pThis));
    }
    auto obj = reinterpret_cast<WindowBase*>(GetWindowLongPtr(hWnd, GWLP_USERDATA));
    if (obj) {
        return obj->WindowProc(hWnd, msg, wParam, lParam);
    }
    return DefWindowProc(hWnd, msg, wParam, lParam);
}

LRESULT CALLBACK WindowBase::WindowProc(HWND hWnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
    static bool mouseTracing = false;
    switch (msg)
    {
    case WM_NCCALCSIZE:
    {
        if (wParam == TRUE)
        {
            return false;
        }
        break;
    }
    //case WM_SIZE: {
    //    if (webviewController != nullptr) {
    //        RECT bounds;
    //        GetClientRect(hWnd, &bounds);
    //        webviewController->put_Bounds(bounds);
    //    };
    //    break;
    //}
    case WM_DESTROY: {
        PostQuitMessage(0);
        break;
    }
    }
    return DefWindowProcW(hWnd, msg, wParam, lParam);
}
