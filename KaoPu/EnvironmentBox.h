#pragma once
#include <windows.h>
#include <Shlobj.h>
#include <shellapi.h>
#include <fstream>
#include <filesystem>
#include <functional>
#include <wrl.h>
#include <wil/com.h>
#include <WebView2.h>
//todo �״�ʹ�ñ�Ӧ����Ҫ��ʼ������
class EnvironmentBox
{
public:
	static void Init(const std::function<void()> func);
	HRESULT callBack(HRESULT result, ICoreWebView2Environment* env);
	ICoreWebView2Environment* Environment;
private:
	void ensureAppFolder();
	bool checkRegKey(const HKEY& key, const std::wstring& subKey);
	bool checkRuntime();
	std::function<void()> func;
};

