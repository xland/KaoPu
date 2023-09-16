import React from "jsx-dom"
import "./CenterBox.css"
import LeftBar from "./CenterBox/LeftBar"
import NavigateBox from "./CenterBox/NavigateBox"
import ListBox from "./CenterBox/ListBox"
import ChessBoard from "./CenterBox/ChessBoard"
import Splitter from "./CenterBox/Splitter"

export default function() {
    document.addEventListener("DOMContentLoaded",()=>{
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
  })
  return (
    <div class="centerBox">
        <LeftBar></LeftBar>
        <NavigateBox></NavigateBox>
        <Splitter id={"navigateBoxSplitter"}></Splitter>
        <ListBox></ListBox>
        <Splitter id={"listBoxSplitter"}></Splitter>
        <ChessBoard></ChessBoard>
    </div>
  )
}