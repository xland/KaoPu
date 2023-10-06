import {PieceBase} from "./PieceBase";
import { pieceBoard } from "./PieceBoard";

export class Pao extends PieceBase{

    initUsablePos(){
        this.clearUsablePos();
        let jump = false;
        let setFunc = (x:number,y:number)=>{
            let target = pieceBoard.getPieceByPos(x,y)
            if(!target){
                if(!jump){
                    this.usablePos.push({x,y});
                }                
            }else{
                if(jump){
                    if(target.isRed != this.isRed){
                        this.usablePos.push({x,y});
                        return true;
                    }
                }else{
                    jump = true;
                }                
            }
        }
        for(let i=this.x+1;i<=8;i++){
            if(setFunc(i,this.y)) break;
        }
        jump = false;
        for(let i = this.x-1;i>=0;i--){
            if(setFunc(i,this.y)) break;
        }
        jump = false;
        for(let i=this.y+1;i<=9;i++){
            if(setFunc(this.x,i)) break;
        }
        jump = false;
        for(let i=this.y-1;i>=0;i--){
            if(setFunc(this.x,i)) break;
        }
    }
}