import React from "jsx-dom";
import "./ChessBoard.scss";
import Board from "./ChessBoard/Board";
import Piece from "./ChessBoard/Piece";
import PiecePoint from "./ChessBoard/PiecePoint";

export default function () {
  let isRedTurn = true;
  let selectPiece = (target) => {
    document.querySelector(".justMoved")?.classList.remove("justMoved");
    if (target.classList.contains("pieceSelected")) {
      target.classList.remove("pieceSelected");
      PiecePoint.removeUsablePoint();
      return;
    }
    let prevSelectedDom = document.querySelector(".pieceSelected");
    if (prevSelectedDom) {
      prevSelectedDom.classList.remove("pieceSelected");
    }
    target.classList.add("pieceSelected");
    PiecePoint[target.innerText.trim()](target.parentElement.id);
  };
  let movePiece = (target) => {
    target.querySelector(".piece")?.remove();
    let cur = document.querySelector(".pieceSelected");
    let parent = cur.parentElement;
    parent.classList.add("justMoved");
    target.appendChild(cur);
    PiecePoint.removeUsablePoint();
    cur.classList.remove("pieceSelected");
    isRedTurn = !isRedTurn;
    setClickable();
  };
  let gridClick = (e) => {
    let target = e.target;
    if (
      target.classList.contains("piece") &&
      target.parentElement.classList.contains("clickable")
    ) {
      selectPiece(target);
      return;
    }
    if (target.classList.contains("clickable")) {
      let dom = target.querySelector("piece");
      if (dom) {
        selectPiece(dom);
        return;
      }
    }
    if (target.classList.contains("usablePoint")) {
      movePiece(target);
    }
    if (target.parentElement.classList.contains("usablePoint")) {
      movePiece(target.parentElement);
    }
  };
  let setClickable = () => {
    let arr = document.querySelectorAll(".clickable");
    for (let dom of arr) {
      dom.classList.remove("clickable");
    }
    let className = isRedTurn ? ".pieceRed" : ".pieceBlack";
    arr = document.querySelectorAll(className);
    for (let dom of arr) {
      dom.parentElement.classList.add("clickable");
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    document
      .getElementById("chessGridContainer")
      .addEventListener("click", gridClick);
    setClickable();
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
