import {PieceBase} from "./PieceBase";

export class Che extends PieceBase{
    initUsablePos(){
        for(let i=this.x+1;i<=8;i++){
            let type = this.checkPieceType(pointId,this.xPointArr[i]+y);
            if(type === "enemy"){
                this.setUsablePoint(this.xPointArr[i]+y);
                break;
            }else if(type === "friend"){
                break;
            }else{
                this.setUsablePoint(this.xPointArr[i]+y);
            }
        }
        for(let i=x-1;i>=0;i--){
            let type = this.checkPieceType(pointId,this.xPointArr[i]+y);
            if(type === "enemy"){
                this.setUsablePoint(this.xPointArr[i]+y);
                break;
            }else if(type === "friend"){
                break;
            }else{
                this.setUsablePoint(this.xPointArr[i]+y);
            }
        }
        for(let i=y+1;i<=9;i++){
            let type = this.checkPieceType(pointId,pointId[0]+i);
            if(type === "enemy"){
                this.setUsablePoint(pointId[0]+i);
                break;
            }else if(type === "friend"){
                break;
            }else{
                this.setUsablePoint(pointId[0]+i);
            }
        }
        for(let i=y-1;i>=0;i--){
            let type = this.checkPieceType(pointId,pointId[0]+i);
            if(type === "enemy"){
                this.setUsablePoint(pointId[0]+i);
                break;
            }else if(type === "friend"){
                break;
            }else{
                this.setUsablePoint(pointId[0]+i);
            }
        }
    }
}