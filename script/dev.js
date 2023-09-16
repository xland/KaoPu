let esbuild = require("esbuild")
let devServerAddr = "";
let startDevServer = async ()=>{
    let ctx = await esbuild.context({
      entryPoints: ['./src/render/index.jsx'],
      bundle: true,
      outdir: 'dist',
      external:["electron"],
      sourcemap:true
    })  
    await ctx.watch()  
    let { host, port } = await ctx.serve({
      servedir: 'dist',
    })
    devServerAddr = `http://localhost:${port}`
  }
let buildMain = async ()=>{
    await esbuild.build({
      entryPoints: ['./src/main/index.ts'],
      bundle: true,
      outfile:"./dist/main.js",
      platform:"node",
      external:["electron"],
      sourcemap:true
    }) 
  }
/**
 * 启动Electron
 */
let startElectron = async ()=>{
    let electron = require("electron")
    let spawn = require("child_process").spawn;
    let child = spawn(electron,["./main.js",devServerAddr],{
        cwd:"./dist"
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
    await buildMain();
    await startDevServer();
    await startElectron();
}

start();


