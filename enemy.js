class Enemy {
    constructor(x,y){
        this.pos = createVector(x,y);
        this.r = 60;
    }
    display(){
        fill(0,200,0,50);
        ellipse(this.pos.x,this.pos.y,this.r,this.r);
    }
    move(){
        this.pos.x -= 5;
    }
    hits(player){
        let d = dist(this.pos.x,this.pos.y,player.pos.x,player.pos.y);
        if(d < this.r + player.r){
            return true;
        }else{
            return false;
        }
    }
}