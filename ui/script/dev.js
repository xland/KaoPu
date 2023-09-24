let esbuild = require("esbuild")
/**
 * 启动Dev服务器
 */
let startDevServer = async ()=>{
    let ctx = await esbuild.context({
      entryPoints: ['./src/index.jsx'],
      bundle: true,
      outdir: 'dist',
      external:["electron"],
      sourcemap:true
    })  
    await ctx.watch()  
    let { host, port } = await ctx.serve({
      servedir: 'dist',
    })
    let devServerAddr = `http://localhost:${port}`
    console.log(devServerAddr);
  }
/**
 * 开始编译
 */
let start = async ()=>{
    await startDevServer();
}

start();


