let player;
let bullets = [];
let enemies = [];
let score = 0;
let hp = 100;
function setup(){
    createCanvas(1200,600);
    player = new Player(width/2,height/2);
    rectMode(CENTER);
    setInterval( () => {
    let e = new Enemy(width + 30,random(height));
    enemies.push(e);
    },2000);
}
function draw(){
    background(51);
    textSize(36);
    text(`Score ` + `${score}`,width/2,30);
    text(`HP ` + `${hp}`,width/2,60);
    for(let j = 0;j < enemies.length;j++){
        enemies[j].display();
        enemies[j].move();
        if(enemies[j].hits(player)){
            hp -= 25;
            enemies.splice(j,1);
            // console.log(hp);
        }
    }
    if(hp <= 0){
        noLoop();
        fill(255,0,0);
        text("Game over!", width/2,height/2);
        setTimeout(() => {
            window.location.reload(1);
        },750);
        }
    for(let i = 0;i < bullets.length;i++){
        bullets[i].display();
        bullets[i].update();        
    }
    for(let j = 0;j < enemies.length;j++){
    for(let i = 0;i < bullets.length;i++){
    if(bullets[i].hits(enemies[j])){
        enemies.splice(j,1);
        bullets.splice(i,1);
        score += 1;
    }
}
}
    player.display();
    if(keyIsDown(87)){
        player.move("up");
    }else 
    if(keyIsDown(83)){
        player.move("down");
    }else
    if(keyIsDown(68)){
        player.move("right");
    }else
    if(keyIsDown(65)){
        player.move("left");
    }

}
function mousePressed(){
    let b = new Bullet(player.pos.x,player.pos.y);
    bullets.push(b);
}