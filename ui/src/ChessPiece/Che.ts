import { pieceBoard } from "./PieceBoard";
import {PieceBase} from "./PieceBase";


export class Che extends PieceBase{
    initUsablePos(){
        this.clearUsablePos();
        for(let i=this.x+1;i<=8;i++){
            this.setUsablePos(i,this.y)
        }
        for(let i=this.x-1;i>=0;i--){
            this.setUsablePos(i,this.y)
        }
        for(let i=this.y+1;i<=9;i++){
            this.setUsablePos(this.x,i)
        }
        for(let i=this.y-1;i>=0;i--){
            this.setUsablePos(this.x,i)
        }
    }
}