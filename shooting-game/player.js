class Player {
    constructor(x,y){
        this.pos = createVector(x,y);
        this.r = 50;
    }
    display(){
        fill(255);
        this.pos.x = constrain(this.pos.x,0 + 25,width - 25);
        this.pos.y = constrain(this.pos.y,0 + 25,height - 25);
        rect(this.pos.x,this.pos.y,this.r,this.r);
    }
    move(direction){
        if(direction === "up"){
            this.pos.y -= 5;
        }else 
        if(direction === "down"){
            this.pos.y += 5;
        }else
        if(direction === "right"){
            this.pos.x += 5;
        }else 
        if(direction === "left"){
            this.pos.x -= 5;
        }
    }
}