```c++
#include <Windows.h>
#include <TGUI/TGUI.hpp>
#include <TGUI/Backend/SFML-Graphics.hpp>
#include <thread>

int APIENTRY wWinMain(_In_ HINSTANCE hInstance, _In_opt_ HINSTANCE hPrevInstance, _In_ LPTSTR lpCmdLine, _In_ int nCmdShow)
{
    sf::RenderWindow window(sf::VideoMode(sf::Vector2u(800, 600)), "My window");
    tgui::Gui gui{ window };
    tgui::Button::Ptr button = tgui::Button::create();
    button->onClick.connect([]() {
        auto func = []() {
            sf::RenderWindow* window = new sf::RenderWindow(sf::VideoMode(sf::Vector2u(800, 600)), "My window2");
            tgui::Gui* gui2 = new tgui::Gui{ *window };
            gui2->mainLoop();
            };
        std::thread t(func);
        t.detach();
        
    });
    auto editBox = tgui::EditBox::create();
    editBox->setPosition(100, 400);
    tgui::Font::setGlobalFont("C:\\Windows\\Fonts\\simhei.ttf");
    gui.add(button);
    gui.add(editBox, "MyWidgetName");
    gui.mainLoop(); // See below for how to use your own main loop
}
```