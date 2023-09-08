/**
 * 启动Electron
 */
let startElectron = async ()=>{
    let electron = require("electron")
    let spawn = require("child_process").spawn;
    let child = spawn(electron,["main.js"],{
        cwd:"./src"
    })
    child.stdout.on('data', (data) => {
        console.log(data.toString("utf8"));
    });
    child.stdout.on('error', (data) => {
        console.log(data.toString("utf8"));
    });
    child.on("close", () => {
        process.exit();
      });
}
/**
 * 开始编译
 */
let start = async ()=>{
    await startElectron();
}

start();


