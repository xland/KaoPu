import {PieceBase} from "./PieceBase";
import { pieceBoard } from "./PieceBoard";

export class Bing extends PieceBase{
    initSelfUsablePos(){
        if(this.y <= 4){
            this.setUsablePos(this.x,this.y+1)
        }
        else{
            if(this.y <= 8){
                this.setUsablePos(this.x,this.y+1)
            }
            if(this.x <= 7){
                this.setUsablePos(this.x+1,this.y)
            }
            if(this.x >= 1){
                this.setUsablePos(this.x-1,this.y)
            }
        }
    }
    initEnemyUsablePos(){
        if(this.y > 4){            
            this.setUsablePos(this.x,this.y-1)
        }else{
            if(this.y >= 1){
                this.setUsablePos(this.x,this.y-1)
            }
            if(this.x <= 7){
                this.setUsablePos(this.x+1,this.y)
            }
            if(this.x >= 1){
                this.setUsablePos(this.x-1,this.y)
            }
        }
    }
    initUsablePos(){
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