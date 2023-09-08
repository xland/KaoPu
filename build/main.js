var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// main/index.ts
var import_electron = require("electron");
var import_path = __toESM(require("path"));
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";
var wins = [];
var creatreWindow = async () => {
  let win = new import_electron.BrowserWindow(
    {
      frame: false,
      webPreferences: {
        allowRunningInsecureContent: true,
        contextIsolation: false,
        nodeIntegration: true,
        sandbox: false,
        webSecurity: false
      }
    }
  );
  wins.push(win);
  await win.loadFile(import_path.default.join(__dirname, "index.html"));
  win.show();
  win.webContents.openDevTools({ mode: "undocked" });
};
var init = async () => {
  await creatreWindow();
};
import_electron.app.whenReady().then(init);
