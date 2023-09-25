export default { 
    xPointArr:['a','b','c','d','e','f','g','h','i'],
    hasPiece(id){
        return  !!document.getElementById(id).querySelector(".piece")
    },
    checkPieceType(curId,tarId){
        let tarDom = document.getElementById(tarId).querySelector(".piece")
        if(tarDom){
            let curDom = document.getElementById(curId).querySelector(".piece");
            if(curDom.classList.contains("pieceBlack")  && tarDom.classList.contains("pieceRed")){
                return "enemy";
            }else if(curDom.classList.contains("pieceRed")  && tarDom.classList.contains("pieceBlack")){
                return "enemy";
            }else {
                return "friend"
            }
        }
        return "blank";
    },
    setUsablePoint(id){
        document.getElementById(id).classList.add("usablePoint");
    },
    removeUsablePoint(){
        let doms = document.querySelectorAll(".usablePoint")
        for(let dom of doms){
            dom.classList.remove("usablePoint")
        }
    },
    '車'(pointId){
        this.removeUsablePoint();
        let x = this.xPointArr.indexOf(pointId[0]);
        let y = parseInt(pointId[1])
        for(let i=x+1;i<=8;i++){
            let type = this.checkPieceType(pointId,this.xPointArr[i]+y);
            if(type === "enemy"){
                this.setUsablePoint(this.xPointArr[i]+y);
                break;
            }else if(type === "friend"){
                break;
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
    },    
    '馬'(pointId){
        this.removeUsablePoint();
        let x = this.xPointArr.indexOf(pointId[0]);
        let y = parseInt(pointId[1])
        if(x-2 >= 0 ){
            if(!this.hasPiece(this.xPointArr[x-1]+y)){
                if(y-1 >=0){
                    if(this.checkPieceType(pointId,this.xPointArr[x-2]+(y-1)) != "friend"){
                        this.setUsablePoint(this.xPointArr[x-2]+(y-1));
                    }                    
                }
                if(y+1 <= 9){
                    if(this.checkPieceType(pointId,this.xPointArr[x-2]+(y+1)) != "friend"){
                        this.setUsablePoint(this.xPointArr[x-2]+(y+1));
                    }
                }
            }
        }
        if(x+2 <= 8){
            if(!this.hasPiece(this.xPointArr[x+2]+y)){
                if(y-1 >= 0){
                    if(this.checkPieceType(pointId,this.xPointArr[x+2]+(y-1)) != "friend"){
                    this.setUsablePoint(this.xPointArr[x+2]+(y-1));
                    }
                }
                if(y+1<=9){
                    if(this.checkPieceType(pointId,this.xPointArr[x+2]+(y+1)) != "friend"){
                    this.setUsablePoint(this.xPointArr[x+2]+(y+1));
                    }
                }
            }
        }
        if(y+2 <= 9){
            if(!this.hasPiece(this.xPointArr[x]+(y+1))){
                if(x-1 >= 0){
                    if(this.checkPieceType(pointId,this.xPointArr[x-1]+(y+2)) != "friend"){
                    this.setUsablePoint(this.xPointArr[x-1]+(y+2));
                    }
                }
                if(x+1<=8){
                    if(this.checkPieceType(pointId,this.xPointArr[x+1]+(y+2)) != "friend"){
                    this.setUsablePoint(this.xPointArr[x+1]+(y+2));
                    }
                }
            }
        }
        if(y-2 >= 0){
            if(!this.hasPiece(this.xPointArr[x]+(y-1))){
                if(x-1 >= 0){
                    if(this.checkPieceType(pointId,this.xPointArr[x-1]+(y-2)) != "friend"){
                    this.setUsablePoint(this.xPointArr[x-1]+(y-2));
                    }
                }
                if(x+1<=8){
                    if(this.checkPieceType(pointId,this.xPointArr[x+1]+(y-2)) != "friend"){
                    this.setUsablePoint(this.xPointArr[x+1]+(y-2));
                    }
                }
            }
        }
        return result;
    },
    '象'(pointId){
        this.removeUsablePoint();
        let x = this.xPointArr.indexOf(pointId[0]);
        let y = parseInt(pointId[1])
        if(x+2 <= 8){
            if(y-2 >= 5){
                let tarId = this.xPointArr[x+2]+(y-2);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(y+2 <= 9){
                let tarId = this.xPointArr[x+2]+(y+2);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
        }
        if(x-2 >= 0){
            if(y-2 >= 5){
                let tarId = this.xPointArr[x-2]+(y-2);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(y+2 <= 9){
                let tarId = this.xPointArr[x-2]+(y+2);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
        }
    },
    '士'(pointId){
        this.removeUsablePoint();
        let x = this.xPointArr.indexOf(pointId[0]);
        let y = parseInt(pointId[1])
        if(x+1<=5){
            if(y+1 <= 9){
                let tarId = this.xPointArr[x+1]+(y+1);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(y-1 >= 7){
                let tarId = this.xPointArr[x+1]+(y-1);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
        }
        if(x-1>=3){
            if(y+1 <= 9){
                let tarId = this.xPointArr[x-1]+(y+1);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(y-1 >= 7){
                let tarId = this.xPointArr[x-1]+(y-1);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
        }
    },
    '帥'(pointId){
        this.removeUsablePoint();
        let x = this.xPointArr.indexOf(pointId[0]);
        let y = parseInt(pointId[1])
        if(x+1<=5){
            let tarId = this.xPointArr[x+1]+y;
            if(this.checkPieceType(pointId,tarId) != "friend"){
                this.setUsablePoint(tarId);
            }
        }
        if(x-1>=3){
            let tarId = this.xPointArr[x-1]+y;
            if(this.checkPieceType(pointId,tarId) != "friend"){
                this.setUsablePoint(tarId);
            }
        }
        if(y+1<=2){
            let tarId = this.xPointArr[x]+(y+1);
            if(this.checkPieceType(pointId,tarId) != "friend"){
                this.setUsablePoint(tarId);
            }
        }
        if(y-1>=0){
            let tarId = this.xPointArr[x]+(y-1);
            if(this.checkPieceType(pointId,tarId) != "friend"){
                this.setUsablePoint(tarId);
            }
        }
    },
    '炮'(pointId){
        this.removeUsablePoint();
        let x = this.xPointArr.indexOf(pointId[0]);
        let y = parseInt(pointId[1])
        let jumpFlag = false;
        let checkPoint = (id)=>{
            if(jumpFlag){
                if(this.checkPieceType(pointId,id) === "enemy"){
                    this.setUsablePoint(id);
                    return true
                }
            }else{
                if(this.hasPiece(id)){
                    jumpFlag = true;                    
                }else{
                    this.setUsablePoint(id);
                }
                return false
            }
        }
        for(let i=x+1;i<=8;i++){
            if(checkPoint(this.xPointArr[i]+y)){
                break;
            }
        }
        jumpFlag = false;
        for(let i = x-1;i>=0;i--){
            if(checkPoint(this.xPointArr[i]+y)){
                break;
            }
        }
        jumpFlag = false;        
        for(let i=y+1;i<=9;i++){
            if(checkPoint(pointId[0]+i)){
                break;
            }
        }
        jumpFlag = false;        
        for(let i=y-1;i>=0;i--){
            if(checkPoint(pointId[0]+i)){
                break;
            }
        }
    },
    '兵'(pointId){
        this.removeUsablePoint();
        let x = this.xPointArr.indexOf(pointId[0]);
        let y = parseInt(pointId[1])
        if(y < 5){
            let tarId = this.xPointArr[x]+(y+1);
            if(this.checkPieceType(pointId,tarId) != "friend"){
                this.setUsablePoint(tarId);
            }
        }else{
            if(y+1<=9){
                let tarId = this.xPointArr[x]+(y+1);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(x+1<=8){
                let tarId = this.xPointArr[x+1]+y;
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(x-1>=0){
                let tarId = this.xPointArr[x-1]+y;
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
        }
    },
    '將'(pointId){
        this.removeUsablePoint();
        let x = this.xPointArr.indexOf(pointId[0]);
        let y = parseInt(pointId[1])
        if(x+1<=5){
            let tarId = this.xPointArr[x+1]+y;
            if(this.checkPieceType(pointId,tarId) != "friend"){
                this.setUsablePoint(tarId);
            }
        }
        if(x-1>=3){
            let tarId = this.xPointArr[x-1]+y;
            if(this.checkPieceType(pointId,tarId) != "friend"){
                this.setUsablePoint(tarId);
            }
        }
        if(y+1<=9){
            let tarId = this.xPointArr[x]+(y+1);
            if(this.checkPieceType(pointId,tarId) != "friend"){
                this.setUsablePoint(tarId);
            }
        }
        if(y-1>=7){
            let tarId = this.xPointArr[x]+(y-1);
            if(this.checkPieceType(pointId,tarId) != "friend"){
                this.setUsablePoint(tarId);
            }
        }
    },
    '相'(pointId){
        this.removeUsablePoint();
        let x = this.xPointArr.indexOf(pointId[0]);
        let y = parseInt(pointId[1])
        if(x+2 <= 8){
            if(y+2 <= 4){
                let tarId = this.xPointArr[x+2]+(y+2);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(y-2 >=0){
                let tarId = this.xPointArr[x+2]+(y-2);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
        }
        if(x-2 >= 0){
            if(y+2 <= 4){
                let tarId = this.xPointArr[x-2]+(y+2);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(y-2 >=0){
                let tarId = this.xPointArr[x-2]+(y+2);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
        }
    },
    '卒'(pointId){
        this.removeUsablePoint();
        let x = this.xPointArr.indexOf(pointId[0]);
        let y = parseInt(pointId[1])
        if(y > 4){
            let tarId = this.xPointArr[x]+(y-1);
            if(this.checkPieceType(pointId,tarId) != "friend"){
                this.setUsablePoint(tarId);
            }
        }else{
            if(y-1>=0){
                let tarId = this.xPointArr[x]+(y-1);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(x+1<=8){
                let tarId = this.xPointArr[x+1]+y;
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(x-1>=0){
                let tarId = this.xPointArr[x-1]+y;
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
        }
    },
    '仕'(pointId){
        this.removeUsablePoint();
        let x = this.xPointArr.indexOf(pointId[0]);
        let y = parseInt(pointId[1])
        if(x+1<=5){
            if(y+1 <= 2){
                let tarId = this.xPointArr[x+1]+(y+1);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(y-1 >= 0){
                let tarId = this.xPointArr[x+1]+(y-1);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
        }
        if(x-1>=3){
            if(y+1 <= 2){
                let tarId = this.xPointArr[x-1]+(y+1);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
            if(y-1 >= 0){
                let tarId = this.xPointArr[x-1]+(y-1);
                if(this.checkPieceType(pointId,tarId) != "friend"){
                    this.setUsablePoint(tarId);
                }
            }
        }
    }
}