import {PieceBase} from "./PieceBase";
import { pieceBoard } from "./PieceBoard";
export class Xiang extends PieceBase{
    initSelfUsablePos(){
        if(this.x+2 <= 8){
            if(this.y+2 <= 4){
                this.setUsablePos(this.x+2,this.y+2)
            }
            if(this.y-2 >=0){
                this.setUsablePos(this.x+2,this.y-2)
            }
        }
        if(this.x-2 >= 0){
            if(this.y+2 <= 4){
                this.setUsablePos(this.x-2,this.y+2)
            }
            if(this.y-2 >=0){
                this.setUsablePos(this.x-2,this.y-2)
            }
        }
    }
    initEnemyUsablePos(){
        if(this.x+2 <= 8){
            if(this.y-2 >= 5){
                this.setUsablePos(this.x+2,this.y-2)
            }
            if(this.y+2 <= 9){
                this.setUsablePos(this.x+2,this.y+2)
            }
        }
        if(this.x-2 >= 0){
            if(this.y-2 >= 5){
                this.setUsablePos(this.x-2,this.y-2)
            }
            if(this.y+2 <= 9){
                this.setUsablePos(this.x-2,this.y+2)
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