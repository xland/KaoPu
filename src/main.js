let {app, BrowserWindow,ipcMain} = require("electron");
let path = require("path");
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";
let wins = [];
let creatreWindow = async ()=>{
    let win = new BrowserWindow(
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
    wins.push(win);
    await win.loadURL("http://127.0.0.1:5500/src/index.html");
    win.show();
    win.webContents.openDevTools({mode:"undocked"});
}

let init = async ()=>{
    await creatreWindow();
}

app.whenReady().then(init)