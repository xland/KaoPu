import React from "jsx-dom"
import "./ChessBoard.css"
import Board from "./ChessBoard/Board"

export default function () {
    let minimize = () => {

    }
    return (
        <div class="chessBoard">
            <Board id={"boardImg"}></Board>
            {/* <img id="boardImg" src="./res/board.svg" alt="" /> */}
        </div>
    )
}