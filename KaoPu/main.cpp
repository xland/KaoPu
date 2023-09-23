#include "webui.hpp"

int APIENTRY wWinMain(_In_ HINSTANCE hInstance, _In_opt_ HINSTANCE hPrevInstance, _In_ LPTSTR lpCmdLine, _In_ int nCmdShow)
{
    webui::window my_window;
    my_window.set_multi_access(true);
    my_window.show(R"(<html><head><title>≤‚ ‘</title>   
        <link rel="stylesheet" href="http://localhost:8000/res/iconfont.css">
        <link rel="stylesheet" href="http://localhost:8000/index.css">
        </head>
        <body>
        <script src="http://localhost:8000/index.js"></script>
        <script>
            new EventSource('http://localhost:8000/esbuild').addEventListener('change', () => location.reload())
        </script>
        </body>
        </html>)");
    webui::set_timeout(0);
    webui::wait();
    return 0;
}