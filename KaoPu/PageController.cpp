#include "PageController.h"
#include "App.h"
#include "EnvironmentBox.h"
using namespace Microsoft::WRL;


PageController::PageController(ICoreWebView2Controller* ctrl) : Controller{ctrl}
{
    wil::com_ptr<ICoreWebView2> webview;
    auto result = Controller->get_CoreWebView2(&webview);
    page = new Page(std::move(webview));
}
PageController::~PageController()
{

}
