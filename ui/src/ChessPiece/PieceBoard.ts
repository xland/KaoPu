import { Bing } from "./Bing";
import { Che } from "./Che";
import { Jiang } from "./Jiang";
import { Shi } from "./Ma";
import { Pao } from "./Pao";
import { PieceBase } from "./PieceBase";
import { Ma } from "./Shi";
import { Xiang } from "./Xiang";

class PieceBoard{
    pieces:PieceBase[] = []
    isSelfRed = true

    initSelfPiece(){
        let che = new Che();
        che.isRed = this.isSelfRed;
        che.text = "車"
        che.x = 0
        che.y = 0
        this.pieces.push(che);

        let ma = new Ma();
        ma.isRed = this.isSelfRed;
        ma.text = "馬"
        ma.x = 1;
        ma.y = 0
        this.pieces.push(ma);

        let xiang = new Xiang();
        xiang.isRed = this.isSelfRed;
        xiang.text = this.isSelfRed?"相":"象"
        xiang.x = 2;
        xiang.y = 0
        this.pieces.push(xiang);

        let shi = new Shi();
        shi.isRed = this.isSelfRed;
        shi.text = this.isSelfRed?"仕":"士"
        shi.x = 3;
        shi.y = 0
        this.pieces.push(shi);

        let jiang = new Jiang();
        jiang.isRed = this.isSelfRed;
        jiang.text = this.isSelfRed?"帥":"將"
        jiang.x = 4;
        jiang.y = 0
        this.pieces.push(jiang);

        let shi2 = new Shi();
        shi2.isRed = this.isSelfRed;
        shi2.text = this.isSelfRed?"仕":"士"
        shi2.x = 5;
        shi2.y = 0
        this.pieces.push(shi2);

        let xiang2 = new Xiang();
        xiang2.isRed = this.isSelfRed;
        xiang2.text = this.isSelfRed?"相":"象"
        xiang2.x = 6;
        xiang2.y = 0
        this.pieces.push(xiang2);

        let ma2 = new Ma();
        ma2.isRed = this.isSelfRed;
        ma2.text = "馬"
        ma2.x = 7;
        ma2.y = 0
        this.pieces.push(ma2);

        let che2 = new Che();
        che2.isRed = this.isSelfRed;
        che2.text = "車"
        che2.x = 8
        che2.y = 0
        this.pieces.push(che2);

        let pao = new Pao();
        pao.isRed = this.isSelfRed;
        pao.text = "炮"
        pao.x = 1
        pao.y = 2
        this.pieces.push(pao);

        let pao2 = new Pao();
        pao2.isRed = this.isSelfRed;
        pao2.text = "炮"
        pao2.x = 7
        pao2.y = 2
        this.pieces.push(pao2);

        let arr = [0,2,4,6,8]
        for(let x of arr){
            let bing = new Bing();
            bing.isRed = this.isSelfRed;
            bing.text = this.isSelfRed?"兵":"卒"
            bing.x = x
            bing.y = 3
            this.pieces.push(bing);
        }
    }

    initEnemyPiece(){
        let che = new Che();
        che.isRed = !this.isSelfRed;
        che.text = "車"
        che.x = 0
        che.y = 9
        this.pieces.push(che);

        let ma = new Ma();
        ma.isRed = !this.isSelfRed;
        ma.text = "馬"
        ma.x = 1;
        ma.y = 9
        this.pieces.push(ma);

        let xiang = new Xiang();
        xiang.isRed = !this.isSelfRed;
        xiang.text = this.isSelfRed?"相":"象"
        xiang.x = 2;
        xiang.y = 9
        this.pieces.push(xiang);

        let shi = new Shi();
        shi.isRed = !this.isSelfRed;
        shi.text = this.isSelfRed?"仕":"士"
        shi.x = 3;
        shi.y = 9
        this.pieces.push(shi);

        let jiang = new Jiang();
        jiang.isRed = !this.isSelfRed;
        jiang.text = this.isSelfRed?"帥":"將"
        jiang.x = 4;
        jiang.y = 9
        this.pieces.push(jiang);

        let shi2 = new Shi();
        shi2.isRed = !this.isSelfRed;
        shi2.text = this.isSelfRed?"仕":"士"
        shi2.x = 5;
        shi2.y = 9
        this.pieces.push(shi2);

        let xiang2 = new Xiang();
        xiang2.isRed = !this.isSelfRed;
        xiang2.text = this.isSelfRed?"相":"象"
        xiang2.x = 6;
        xiang2.y = 9
        this.pieces.push(xiang2);

        let ma2 = new Ma();
        ma2.isRed = !this.isSelfRed;
        ma2.text = "馬"
        ma2.x = 7;
        ma2.y = 9
        this.pieces.push(ma2);

        let che2 = new Che();
        che2.isRed = !this.isSelfRed;
        che2.text = "車"
        che2.x = 8
        che2.y = 9
        this.pieces.push(che2);

        let pao = new Pao();
        pao.isRed = !this.isSelfRed;
        pao.text = "炮"
        pao.x = 1
        pao.y = 7
        this.pieces.push(pao);

        let pao2 = new Pao();
        pao2.isRed = !this.isSelfRed;
        pao2.text = "炮"
        pao2.x = 7
        pao2.y = 7
        this.pieces.push(pao2);

        let arr = [0,2,4,6,8]
        for(let x of arr){
            let bing = new Bing();
            bing.isRed = !this.isSelfRed;
            bing.text = this.isSelfRed?"兵":"卒"
            bing.x = x
            bing.y = 6
            this.pieces.push(bing);
        }
    }

    getPieceByPos(x:number,y:number){
        if(x < 0 || y < 0 || x > 8 || y > 9) {
            return null;
        }        
        for(let item of this.pieces){
            if(item.x === x && item.y === y){
                return item;
                break;
            }
        }
        return null;
    }

    init(){
        //todo 翻转棋盘
        this.initSelfPiece();
        this.initEnemyPiece();
    }
    
}

export let pieceBoard = new PieceBoard();