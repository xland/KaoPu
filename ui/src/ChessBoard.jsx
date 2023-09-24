import React from "jsx-dom";
import "./ChessBoard.css";
import Board from "./ChessBoard/Board";
import Piece from "./ChessBoard/Piece";

export default function () {
  document.addEventListener("DOMContentLoaded", () => {
    let resizeHandler = (e) => {
      let dom = document.getElementById("chessBoardContainer");
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
      // let grid = document.getElementById("chessGridContainer");
      // grid.style = `left:${dom.offsetLeft - dom.clientWidth / 16}px;top:${
      //   dom.offsetTop - dom.clientHeight / 18
      // }px;width:${dom.clientWidth + dom.clientWidth / 8}px;height:${
      //   dom.clientHeight + dom.clientHeight / 9
      // }px`;
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    boardDom.addEventListener("click", (e) => {
      let target = e.target;
      if (target.classList.contains("piece")) {
        console.log(e.target);
      }
    });
  });
  return (
    <div class="chessBoard">
      <Board>
        <div id="chessGridContainer">
          <div class="row">
            <div id="a9" class="cell">
              <Piece text="車"></Piece>
            </div>
            <div id="b9" class="cell">
              <Piece text="馬"></Piece>
            </div>
            <div id="c9" class="cell">
              <Piece text="象"></Piece>
            </div>
            <div id="d9" class="cell">
              <Piece text="士"></Piece>
            </div>
            <div id="e9" class="cell">
              <Piece text="將"></Piece>
            </div>
            <div id="f9" class="cell">
              <Piece text="士"></Piece>
            </div>
            <div id="g9" class="cell">
              <Piece text="象"></Piece>
            </div>
            <div id="h9" class="cell">
              <Piece text="馬"></Piece>
            </div>
            <div id="i9" class="cell">
              <Piece text="車"></Piece>
            </div>
          </div>
          <div class="row">
            <div id="a8" class="cell"></div>
            <div id="b8" class="cell"></div>
            <div id="c8" class="cell"></div>
            <div id="d8" class="cell"></div>
            <div id="e8" class="cell"></div>
            <div id="f8" class="cell"></div>
            <div id="g8" class="cell"></div>
            <div id="h8" class="cell"></div>
            <div id="i8" class="cell"></div>
          </div>
          <div class="row">
            <div id="a7" class="cell"></div>
            <div id="b7" class="cell">
              <Piece text="炮"></Piece>
            </div>
            <div id="c7" class="cell"></div>
            <div id="d7" class="cell"></div>
            <div id="e7" class="cell"></div>
            <div id="f7" class="cell"></div>
            <div id="g7" class="cell"></div>
            <div id="h7" class="cell">
              <Piece text="炮"></Piece>
            </div>
            <div id="i7" class="cell"></div>
          </div>
          <div class="row">
            <div id="a6" class="cell">
              <Piece text="卒"></Piece>
            </div>
            <div id="b6" class="cell"></div>
            <div id="c6" class="cell">
              <Piece text="卒"></Piece>
            </div>
            <div id="d6" class="cell"></div>
            <div id="e6" class="cell">
              <Piece text="卒"></Piece>
            </div>
            <div id="f6" class="cell"></div>
            <div id="g6" class="cell">
              <Piece text="卒"></Piece>
            </div>
            <div id="h6" class="cell"></div>
            <div id="i6" class="cell">
              <Piece text="卒"></Piece>
            </div>
          </div>
          <div class="row">
            <div id="a5" class="cell"></div>
            <div id="b5" class="cell"></div>
            <div id="c5" class="cell"></div>
            <div id="d5" class="cell"></div>
            <div id="e5" class="cell"></div>
            <div id="f5" class="cell"></div>
            <div id="g5" class="cell"></div>
            <div id="h5" class="cell"></div>
            <div id="i5" class="cell"></div>
          </div>
          <div class="row">
            <div id="a4" class="cell"></div>
            <div id="b4" class="cell"></div>
            <div id="c4" class="cell"></div>
            <div id="d4" class="cell"></div>
            <div id="e4" class="cell"></div>
            <div id="f4" class="cell"></div>
            <div id="g4" class="cell"></div>
            <div id="h4" class="cell"></div>
            <div id="i4" class="cell"></div>
          </div>
          <div class="row">
            <div id="a3" class="cell">
              <Piece red={true} text="兵"></Piece>
            </div>
            <div id="b3" class="cell"></div>
            <div id="c3" class="cell">
              <Piece red={true} text="兵"></Piece>
            </div>
            <div id="d3" class="cell"></div>
            <div id="e3" class="cell">
              <Piece red={true} text="兵"></Piece>
            </div>
            <div id="f3" class="cell"></div>
            <div id="g3" class="cell">
              <Piece red={true} text="兵"></Piece>
            </div>
            <div id="h3" class="cell"></div>
            <div id="i3" class="cell">
              <Piece red={true} text="兵"></Piece>
            </div>
          </div>
          <div class="row">
            <div id="a2" class="cell"></div>
            <div id="b2" class="cell">
              <Piece red={true} text="炮"></Piece>
            </div>
            <div id="c2" class="cell"></div>
            <div id="d2" class="cell"></div>
            <div id="e2" class="cell"></div>
            <div id="f2" class="cell"></div>
            <div id="g2" class="cell"></div>
            <div id="h2" class="cell">
              <Piece red={true} text="炮"></Piece>
            </div>
            <div id="i2" class="cell"></div>
          </div>
          <div class="row">
            <div id="a1" class="cell"></div>
            <div id="b1" class="cell"></div>
            <div id="c1" class="cell"></div>
            <div id="d1" class="cell"></div>
            <div id="e1" class="cell"></div>
            <div id="f1" class="cell"></div>
            <div id="g1" class="cell"></div>
            <div id="h1" class="cell"></div>
            <div id="i1" class="cell"></div>
          </div>
          <div class="row">
            <div id="a0" class="cell">
              <Piece red={true} text="車"></Piece>
            </div>
            <div id="b0" class="cell">
              <Piece red={true} text="馬"></Piece>
            </div>
            <div id="c0" class="cell">
              <Piece red={true} text="相"></Piece>
            </div>
            <div id="d0" class="cell">
              <Piece red={true} text="仕"></Piece>
            </div>
            <div id="e0" class="cell">
              <Piece red={true} text="帥"></Piece>
            </div>
            <div id="f0" class="cell">
              <Piece red={true} text="仕"></Piece>
            </div>
            <div id="g0" class="cell">
              <Piece red={true} text="相"></Piece>
            </div>
            <div id="h0" class="cell">
              <Piece red={true} text="馬"></Piece>
            </div>
            <div id="i0" class="cell">
              <Piece red={true} text="車"></Piece>
            </div>
          </div>
        </div>
      </Board>
    </div>
  );
}
