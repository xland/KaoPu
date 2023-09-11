let {app, BrowserWindow,ipcMain,webContents} = require("electron");
let path = require("path");
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";
let win;
let creatreWindow = async ()=>{
    win = new BrowserWindow(
        {
            frame:false,
            webPreferences:{
                allowRunningInsecureContent: true,
                contextIsolation: false,
                nodeIntegration:true,
                sandbox:false,
                webSecurity:false,
            }
        }
    );
    win.addListener("maximize",()=>{
        win.webContents.send("windowStateChanged","maximize")
    })
    win.addListener("unmaximize",()=>{
        win.webContents.send("windowStateChanged","unmaximize")
    })
    await win.loadURL(process.argv[2]);
    win.show();
    win.webContents.openDevTools({mode:"undocked"});
}
let initHook = ()=>{
    ipcMain.handle("changeWindowState",(e,state)=>{
        BrowserWindow.fromWebContents(e.sender)[state]();
    })
}
let init = async ()=>{
    await creatreWindow();
    initHook();
}

app.whenReady().then(init)