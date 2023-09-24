import React from "jsx-dom";
import "./Grid.css";
import Piece from "./Piece";
export default function (props) {
  return (
    <div class="chessGridContainer">
      <div class="girdBoardRow">
        <div class="gridBoardBox">
          <Piece text="車"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece text="馬"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece text="象"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece text="士"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece text="將"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece text="士"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece text="象"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece text="馬"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece text="車"></Piece>
        </div>
      </div>
      <div class="girdBoardRow">
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
      </div>
      <div class="girdBoardRow">
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece text="炮"></Piece>
        </div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece text="炮"></Piece>
        </div>
        <div class="gridBoardBox"></div>
      </div>
      <div class="girdBoardRow">
        <div class="gridBoardBox">
          <Piece text="卒"></Piece>
        </div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece text="卒"></Piece>
        </div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece text="卒"></Piece>
        </div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece text="卒"></Piece>
        </div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece text="卒"></Piece>
        </div>
      </div>
      <div class="girdBoardRow">
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
      </div>
      <div class="girdBoardRow">
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
      </div>
      <div class="girdBoardRow">
        <div class="gridBoardBox">
          <Piece red={true} text="兵"></Piece>
        </div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece red={true} text="兵"></Piece>
        </div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece red={true} text="兵"></Piece>
        </div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece red={true} text="兵"></Piece>
        </div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece red={true} text="兵"></Piece>
        </div>
      </div>
      <div class="girdBoardRow">
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece red={true} text="炮"></Piece>
        </div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox">
          <Piece red={true} text="炮"></Piece>
        </div>
        <div class="gridBoardBox"></div>
      </div>
      <div class="girdBoardRow">
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
        <div class="gridBoardBox"></div>
      </div>
      <div class="girdBoardRow">
        <div class="gridBoardBox">
          <Piece red={true} text="車"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece red={true} text="馬"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece red={true} text="相"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece red={true} text="仕"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece red={true} text="帥"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece red={true} text="仕"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece red={true} text="相"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece red={true} text="馬"></Piece>
        </div>
        <div class="gridBoardBox">
          <Piece red={true} text="車"></Piece>
        </div>
      </div>
    </div>
  );
}
