import React from "jsx-dom"
import "./ChessBoard.css"
import Board from "./ChessBoard/Board"

export default function () {
    window.addEventListener("resize",(e)=>{
        let w = document.body.clientWidth - 60;
        let h = document.body.clientHeight - 32 - 28 - 60;
        if(h/9*8 > w){
            if(w/8*9 > h){
                
            } 
        }

    })
    return (
        <div class="chessBoard">
            <div class="chessBoardContainer">
                <div class="chessBoardRow">
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                </div>
                <div class="chessBoardRow">
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                </div>
                <div class="chessBoardRow">
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                </div>
                <div class="chessBoardRow">
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                </div>
                <div class="chessBoardRow">
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                </div>
                <div class="chessBoardRow">
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                </div>
                <div class="chessBoardRow">
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                </div>
                <div class="chessBoardRow">
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                    <div class="chessBoardBox"></div>
                </div>
            </div>
            {/* <Board id={"boardImg"}></Board> */}
            {/* <img id="boardImg" src="./res/board.svg" alt="" /> */}
        </div>
    )
}