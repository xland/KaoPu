import React from "jsx-dom";
import "./Grid.scss";
import Piece from "./Piece";
export default function (props) {
  document.addEventListener("DOMContentLoaded", () => {
    let boardDom = document.getElementById("chessGridContainer");
    boardDom.addEventListener("click", (e) => {
      let target = e.target;
      if (target.classList.contains("piece")) {
        console.log(e.target);
      }
    });
  });
  return (
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
        <div class="cell"></div>
        <div class="cell">
          <Piece text="炮"></Piece>
        </div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">
          <Piece text="炮"></Piece>
        </div>
        <div class="cell"></div>
      </div>
      <div class="row">
        <div class="cell">
          <Piece text="卒"></Piece>
        </div>
        <div class="cell"></div>
        <div class="cell">
          <Piece text="卒"></Piece>
        </div>
        <div class="cell"></div>
        <div class="cell">
          <Piece text="卒"></Piece>
        </div>
        <div class="cell"></div>
        <div class="cell">
          <Piece text="卒"></Piece>
        </div>
        <div class="cell"></div>
        <div class="cell">
          <Piece text="卒"></Piece>
        </div>
      </div>
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="row">
        <div class="cell">
          <Piece red={true} text="兵"></Piece>
        </div>
        <div class="cell"></div>
        <div class="cell">
          <Piece red={true} text="兵"></Piece>
        </div>
        <div class="cell"></div>
        <div class="cell">
          <Piece red={true} text="兵"></Piece>
        </div>
        <div class="cell"></div>
        <div class="cell">
          <Piece red={true} text="兵"></Piece>
        </div>
        <div class="cell"></div>
        <div class="cell">
          <Piece red={true} text="兵"></Piece>
        </div>
      </div>
      <div class="row">
        <div class="cell"></div>
        <div class="cell">
          <Piece red={true} text="炮"></Piece>
        </div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">
          <Piece red={true} text="炮"></Piece>
        </div>
        <div class="cell"></div>
      </div>
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="row">
        <div class="cell">
          <Piece red={true} text="車"></Piece>
        </div>
        <div class="cell">
          <Piece red={true} text="馬"></Piece>
        </div>
        <div class="cell">
          <Piece red={true} text="相"></Piece>
        </div>
        <div class="cell">
          <Piece red={true} text="仕"></Piece>
        </div>
        <div class="cell">
          <Piece red={true} text="帥"></Piece>
        </div>
        <div class="cell">
          <Piece red={true} text="仕"></Piece>
        </div>
        <div class="cell">
          <Piece red={true} text="相"></Piece>
        </div>
        <div class="cell">
          <Piece red={true} text="馬"></Piece>
        </div>
        <div class="cell">
          <Piece red={true} text="車"></Piece>
        </div>
      </div>
    </div>
  );
}
