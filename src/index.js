// 标题栏按钮
(()=>{
    document.getElementById("minimizeBtn").addEventListener("click",async (e)=>{
        let {ipcRenderer} = require("electron")
        await ipcRenderer.invoke("changeWindowState","minimize");
        //todo hover style can not be removed
    })
    document.getElementById("restoreBtn").addEventListener("click",async ()=>{
        let {ipcRenderer} = require("electron")
        await ipcRenderer.invoke("changeWindowState","restore");
    })
    document.getElementById("maximizeBtn").addEventListener("click",async ()=>{
        let {ipcRenderer} = require("electron")
        await ipcRenderer.invoke("changeWindowState","maximize");
    })
    document.getElementById("closeBtn").addEventListener("click",async ()=>{
        let {ipcRenderer} = require("electron")
        await ipcRenderer.invoke("changeWindowState","close");
    })
    let {ipcRenderer} = require("electron")
    ipcRenderer.addListener("windowStateChanged",(e,state)=>{
        console.log(state)
        if(state === "maximize"){
            document.getElementById("restoreBtn").style.display = ""
            document.getElementById("maximizeBtn").style.display = "none"
        }else if(state === "unmaximize"){
            document.getElementById("restoreBtn").style.display = "none"
            document.getElementById("maximizeBtn").style.display = ""
        }
    })
})();

//splitter
(()=>{
    document.body.ondragstart = ()=>false;
    document.body.ondragend = ()=>false;
    document.body.ondrop = ()=>false;    
    let initSplitter = (id)=>{
        let initEvent = (dom)=>{
            let domPrev = dom.previousElementSibling;
            let documentMouseMove = (e)=>{
                //todo 边界控制
                let w = e.x - domPrev.offsetLeft;
                domPrev.style.width = w+"px";
                let splitters = document.querySelectorAll(".splitter");
                for(let splitter of splitters){
                    let domPrev = splitter.previousElementSibling;
                    let x = domPrev.offsetLeft+domPrev.clientWidth-splitter.clientWidth/2;
                    splitter.style.left = x+"px";
                }        
            }
            let documentMouseUp = (e)=>{
                document.removeEventListener("mousemove",documentMouseMove);
                document.removeEventListener("mouseup",documentMouseUp)
                domPrev = null;
                console.log("remove")
            }    
            document.addEventListener("mousemove",documentMouseMove)
            document.addEventListener("mouseup",documentMouseUp)
        }
        let dom = document.getElementById(id);
        dom.addEventListener("mousedown",(e)=>initEvent(e.target))
        let domPrev = dom.previousElementSibling;
        let x = domPrev.offsetLeft+domPrev.clientWidth-dom.clientWidth/2;
        dom.style.left = x+"px";
    }
    initSplitter("navigateBoxSplitter");
    initSplitter("listBoxSplitter");
})();




