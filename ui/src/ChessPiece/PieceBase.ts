import { pieceBoard } from "./PieceBoard";
export class PieceBase{
    isRed = true
    usablePos:{x:number,y:number}[] = []
    x:number
    y:number
    text:string
    clearUsablePos(){
        let doms = document.querySelectorAll(".usablePoint")
        for(let dom of doms){
            dom.classList.remove("usablePoint")
        }
    }
    setOneUsablePos(pos:{x:number,y:number}){
        this.usablePos.push(pos);
    }
    setUsablePos(x:number,y:number){
        if(x < 0 || y < 0 || x > 8 || y > 9) {
            return;
        }
        let tar = pieceBoard.getPieceByPos(x,y);
        if(!tar || tar.isRed != this.isRed){
            this.usablePos.push({x,y});
        }
    }
}