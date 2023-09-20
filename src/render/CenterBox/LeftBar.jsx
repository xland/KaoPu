import React from "jsx-dom"
import "./LeftBar.css"
export default function () {
    let cmds = [];
    cmds.push("position startpos");
    cmds.push("go depth 1")
    cmds.push("d")
    let cmdIndex = 0;
    let startServer = async () => {
        let { ipcRenderer } = require("electron");
        await ipcRenderer.invoke("callServer", "startServer");
    }
    let sendCmdToServer = async () => {
        let { ipcRenderer } = require("electron");
        await ipcRenderer.invoke("callServer", cmds[cmdIndex]);
        cmdIndex += 1;
    }
    return (
        <div class="leftBar">
            <div class="mainMenu"></div>
            <div class="subMenu">
                <div  onClick={startServer}>
                    <i class="iconfont icon-user-fill"></i>
                </div>
                <div  onClick={sendCmdToServer}>
                    <i class="iconfont icon-setting-filling"></i>
                </div>
            </div>
        </div>
    )
}