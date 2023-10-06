import {PieceBase} from "./PieceBase";
import { pieceBoard } from "./PieceBoard";

export class Jiang extends PieceBase{
    initSelfUsablePos(){
        if(this.x+1<=5){
            this.setUsablePos(this.x+1,this.y)
        }
        if(this.x-1>=3){
            this.setUsablePos(this.x-1,this.y)
        }
        if(this.y+1<=2){
            this.setUsablePos(this.x,this.y+1)
        }
        if(this.y-1>=0){
            this.setUsablePos(this.x,this.y-1)
        }
    }
    initEnemyUsablePos(){
        if(this.x+1<=5){
            this.setUsablePos(this.x+1,this.y)
        }
        if(this.x-1>=3){
            this.setUsablePos(this.x-1,this.y)
        }
        if(this.y+1<=9){
            this.setUsablePos(this.x,this.y+1)
        }
        if(this.y-1>=7){
            this.setUsablePos(this.x,this.y-1)
        }
    }
    initUsablePos(){
        //todo  检测会不会自己找死
        this.clearUsablePos();
        if(pieceBoard.isSelfRed && this.isRed){
            this.initSelfUsablePos();
        }
        else if(pieceBoard.isSelfRed && !this.isRed){
            this.initEnemyUsablePos();
        }
        else if(!pieceBoard.isSelfRed && this.isRed){
            this.initEnemyUsablePos();
        }
        else if(!pieceBoard.isSelfRed && !this.isRed){
            this.initSelfUsablePos();
        } 
    }
}