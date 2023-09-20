import React from "jsx-dom";
import "./TitleBar.css";
export default function () {
  let minimize = async () => {
    let { ipcRenderer } = require("electron");
    await ipcRenderer.invoke("changeWindowState", "minimize");
  };
  let restore = async () => {
    let { ipcRenderer } = require("electron");
    await ipcRenderer.invoke("changeWindowState", "restore");
  };
  let maximize = async () => {
    let { ipcRenderer } = require("electron");
    await ipcRenderer.invoke("changeWindowState", "maximize");
  };
  let close = async () => {
    let { ipcRenderer } = require("electron");
    await ipcRenderer.invoke("changeWindowState", "close");
  };
  let windowStateHandler = (e, state) => {
    if (state === "maximize") {
      document.getElementById("restoreBtn").style.display = "";
      document.getElementById("maximizeBtn").style.display = "none";
    } else if (state === "unmaximize") {
      document.getElementById("restoreBtn").style.display = "none";
      document.getElementById("maximizeBtn").style.display = "";
    }
  }
  document.addEventListener("DOMContentLoaded", async ()=>{
    let { ipcRenderer } = require("electron");
    ipcRenderer.addListener("windowStateChanged", windowStateHandler);
    let flag = await ipcRenderer.invoke("getWindowState");
    windowStateHandler(null,flag?"maximize":"unmaximize");
  })
  return (
    <div class="titleBar">
      <div class="title">测试程序</div>
      <div class="toolBtns">
        <div onClick={minimize}>
          <i class="iconfont icon-minimize"></i>
        </div>
        <div onClick={restore} id="restoreBtn" style="display: none;">
          <i class="iconfont icon-suoxiao1"></i>
        </div>
        <div onClick={maximize} id="maximizeBtn">
          <i class="iconfont icon-fangda"></i>
        </div>
        <div onClick={close} >
          <i class="iconfont icon-close"></i>
        </div>
      </div>
    </div>
  );
}
