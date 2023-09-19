import React from "jsx-dom";
import "./ChessBoard.css";
import Board from "./ChessBoard/Board";

export default function () {
  document.addEventListener("DOMContentLoaded", () => {
    let resizeHandler = (e) => {
      let dom = document.querySelector(".chessBoardContainer");
      let w = dom.parentNode.clientWidth - 200;
      let h = document.body.clientHeight - 32 - 28 - 200;
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
      <div class="chessBoardContainer">
        <div class="chessBoardRow">
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox jiugongA"></div>
          <div class="chessBoardBox jiugongB"></div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox"></div>
        </div>
        <div class="chessBoardRow">
          <div class="chessBoardBox">
            <div class="flowerRB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLB"></div>
          </div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox jiugongB"></div>
          <div class="chessBoardBox jiugongA"></div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox">
            <div class="flowerRB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLB"></div>
          </div>
        </div>
        <div class="chessBoardRow">
          <div class="chessBoardBox">
            <div class="flowerRT"></div>
            <div class="flowerLB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLT"></div>
            <div class="flowerRB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLB"></div>
            <div class="flowerRT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRB"></div>
            <div class="flowerLT"></div>
          </div>
        </div>
        <div class="chessBoardRow">
          <div class="chessBoardBox">
            <div class="flowerLT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRT"></div>
          </div>
        </div>
        <div class="chessBoardRow"></div>
        <div class="chessBoardRow">
          <div class="chessBoardBox">
            <div class="flowerLB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRB"></div>
          </div>
        </div>
        <div class="chessBoardRow">
          <div class="chessBoardBox">
            <div class="flowerLT"></div>
            <div class="flowerRB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRT"></div>
            <div class="flowerLB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLT"></div>
            <div class="flowerRB"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerRT"></div>
            <div class="flowerLB"></div>
          </div>
        </div>
        <div class="chessBoardRow">
          <div class="chessBoardBox">
            <div class="flowerRT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLT"></div>
          </div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox jiugongA"></div>
          <div class="chessBoardBox jiugongB"></div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox">
            <div class="flowerRT"></div>
          </div>
          <div class="chessBoardBox">
            <div class="flowerLT"></div>
          </div>
        </div>
        <div class="chessBoardRow">
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox jiugongB"></div>
          <div class="chessBoardBox jiugongA"></div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox"></div>
          <div class="chessBoardBox"></div>
        </div>
      </div>
      {/* <Board id={"boardImg"}></Board> */}
      {/* <img id="boardImg" src="./res/board.svg" alt="" /> */}
    </div>
  );
}
