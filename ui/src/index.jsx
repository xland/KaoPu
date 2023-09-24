import React from "jsx-dom";
import "./index.css";
import LeftBar from "./LeftBar";
import NavigateBox from "./NavigateBox";
import Splitter from "./Splitter";
import ListBox from "./ListBox";
import ChessBoard from "./ChessBoard";
function App() {
  document.body.ondragstart = () => false;
  document.body.ondragend = () => false;
  document.body.ondrop = () => false;
  document.addEventListener("DOMContentLoaded", () => {
    let initSplitter = (id) => {
      let initEvent = (dom) => {
        let domPrev = dom.previousElementSibling;
        let documentMouseMove = (e) => {
          //todo 边界控制
          let w = e.x - domPrev.offsetLeft;
          domPrev.style.width = w + "px";
          let splitters = document.querySelectorAll(".splitter");
          for (let splitter of splitters) {
            let domPrev = splitter.previousElementSibling;
            let x =
              domPrev.offsetLeft +
              domPrev.clientWidth -
              splitter.clientWidth / 2;
            splitter.style.left = x + "px";
          }
        };
        let documentMouseUp = (e) => {
          document.removeEventListener("mousemove", documentMouseMove);
          document.removeEventListener("mouseup", documentMouseUp);
          domPrev = null;
        };
        document.addEventListener("mousemove", documentMouseMove);
        document.addEventListener("mouseup", documentMouseUp);
      };
      let dom = document.getElementById(id);
      dom.addEventListener("mousedown", (e) => initEvent(e.target));
      let domPrev = dom.previousElementSibling;
      let x = domPrev.offsetLeft + domPrev.clientWidth - dom.clientWidth / 2;
      dom.style.left = x + "px";
    };
    initSplitter("navigateBoxSplitter");
    initSplitter("listBoxSplitter");
  });
  return (
    <>
      <LeftBar></LeftBar>
      <NavigateBox></NavigateBox>
      <Splitter id={"navigateBoxSplitter"}></Splitter>
      <ListBox></ListBox>
      <Splitter id={"listBoxSplitter"}></Splitter>
      <ChessBoard></ChessBoard>
    </>
  );
}
document.body.appendChild(<App />);
