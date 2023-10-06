import {PieceBase} from "./PieceBase";
import { pieceBoard } from "./PieceBoard";

export class Ma extends PieceBase{
    initUsablePos(){
        this.clearUsablePos();
        let legHolder = pieceBoard.getPieceByPos(this.x-1,this.y);
        if(!legHolder){
            this.setUsablePos(this.x-2,this.y+1)
            this.setUsablePos(this.x-2,this.y-1)
        }
        legHolder = pieceBoard.getPieceByPos(this.x,this.y-1);
        if(!legHolder){
            this.setUsablePos(this.x-1,this.y-2)
            this.setUsablePos(this.x+1,this.y-2)
        }
        legHolder = pieceBoard.getPieceByPos(this.x,this.y+1);
        if(!legHolder){
            this.setUsablePos(this.x-1,this.y+2)
            this.setUsablePos(this.x+1,this.y+2)
        }
        legHolder = pieceBoard.getPieceByPos(this.x+1,this.y);
        if(!legHolder){
            this.setUsablePos(this.x+2,this.y+1)
            this.setUsablePos(this.x+2,this.y-1)
        }
    }
}