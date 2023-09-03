#pragma once
#include <Windows.h>
#include <string>
#include <format>
class WindowBase
{
public:
	WindowBase();
	~WindowBase();
	void Show();
	void InitWindow(const int& x, const int& y, const long& w, const long& h, const std::wstring& title);
protected:

private:
	static LRESULT CALLBACK RouteWindowMessage(HWND hWnd, UINT msg, WPARAM wParam, LPARAM lParam);
	LRESULT CALLBACK WindowProc(HWND hwnd, UINT msg, WPARAM wparam, LPARAM lparam);
	long w, h;
	int x, y;
	HWND hwnd;
	void* pixelData;
	unsigned long pixelDataSize;
	HBITMAP bitmap;
	HDC compatibleDC = NULL;
};

