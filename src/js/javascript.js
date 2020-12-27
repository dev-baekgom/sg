const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const framelimit = 15;

window.onload = () => {
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / framelimit);
}


let positionX = 5, positionY = 5;
let fruit_positionX = 10, fruit_positionY = 10;
const gridSize = 20, tileCount = 20;

let velocityX = 0, velocityY = 0;

function game() {
    positionX += (15/framelimit) * velocityX;
    positionY += (15/framelimit) * velocityY;

    if(positionX < 0) {
        positionX = 0;
        game_over();
    }
    if(positionX > tileCount - 1) {
        positionX = tileCount - 1;
        game_over();
    }
    if(positionY < 0) {
        positionY = 0;
        game_over();
    }
    if(positionY > tileCount - 1) {
        positionY = tileCount - 1;
        game_over();
    }

    if(positionX == fruit_positionX && positionY == fruit_positionY){
      ate();
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "lime";
    ctx.fillRect(positionX * gridSize, positionY * gridSize, gridSize - 2, gridSize - 2);

    ctx.fillStyle = "red";
    ctx.fillRect(fruit_positionX * gridSize, fruit_positionY * gridSize, gridSize - 2, gridSize - 2);
}

function ate(){
  
}

function game_over(){
  alert('game-over!');
  positionX = 5, positionY = 5, velocityX = 0, velocityY = 0, fruit_positionX = 10, fruit_positionY = 10;
}

function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            velocityX = -1;
            velocityY = 0;
            break;
        case 38:
            velocityX = 0;
            velocityY = -1;
            break;
        case 39:
            velocityX = 1;
            velocityY = 0;
            break;
        case 40:
            velocityX = 0;
            velocityY = 1;
            break;
    }
}
