import React from "jsx-dom";
import "./ChessBoard.css";
import Board from "./ChessBoard/Board";

export default function () {
  document.addEventListener("DOMContentLoaded", () => {
    let resizeHandler = (e) => {
      let dom = document.querySelector(".chessBoardContainer");
      if (!dom) return;
      let w = dom.parentNode.clientWidth - 100;
      let h = document.body.clientHeight - 200;
      let w1 = (h / 9) * 8;
      let h1 = (w / 8) * 9;
      if (w1 > w) {
        h = h1;
      }
      if (h1 > h) {
        w = w1;
      }
      dom.style = `width:${w}px;height:${h}px;`;
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
  });
  return (
    <div class="chessBoard">
      <Board></Board>
    </div>
  );
}
