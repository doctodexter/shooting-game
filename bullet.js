class Bullet{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.r = 50;
    }
    display(){
        fill(255);
        ellipse(this.pos.x,this.pos.y,this.r,this.r);
    }
    update(){
        this.pos.x += 6;
    }
    hits(enemy){
        let d = dist(this.pos.x,this.pos.y,enemy.pos.x,enemy.pos.y);
        if(d < this.r + enemy.r){
            return true;
        }else{
            return false;
        }
    }
}