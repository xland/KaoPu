import React from "jsx-dom";
import "./Piece.scss";

export default function (props) {
  return (
    <div class={props.red ? "piece pieceRed" : "piece pieceBlack"}>
      {props.text}
    </div>
  );
}
