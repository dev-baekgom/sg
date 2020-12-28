const gridSize = 20, tileCount_X = canvas.width / gridSize, tileCount_Y = canvas.height / gridSize;

let positionX = 5, positionY = 5;
let fruit_positionX = 10, fruit_positionY = 10;

let velocityX = 0, velocityY = 0;

const trail = [];
let trailLength = 1;

function game() {
    positionX += (15/framelimit) * velocityX;
    positionY += (15/framelimit) * velocityY;

    if(positionX < 0) {
        positionX = 0;
        game_over('Ouch! You hit the wall!');
    }
    if(positionX > tileCount_X - 1) {
        positionX = tileCount_X - 1;
        game_over('Ouch! You hit the wall!');
    }
    if(positionY < 0) {
        positionY = 0;
        game_over('Ouch! You hit the wall!');
    }
    if(positionY > tileCount_Y - 1) {
        positionY = tileCount_Y - 1;
        game_over('Ouch! You hit the wall!');
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white"
    for(let i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize, gridSize)
        if(trail[i].x === positionX && trail[i].y === positionY && trailLength != 1) {
            game_over('You bit your tail!');
        }
    }

    trail.push({
      x: positionX,
      y: positionY
    });
    while(trail.length > trailLength){
      trail.shift();
    }

    if(positionX == fruit_positionX && positionY == fruit_positionY){
      ate();
    }

    ctx.fillStyle = "grey";
    ctx.fillRect(fruit_positionX * gridSize, fruit_positionY * gridSize, gridSize, gridSize);
}

function ate(){
  trailLength++;
  fruit_positionX = Math.floor(Math.random()*tileCount_X);
  fruit_positionY = Math.floor(Math.random()*tileCount_Y);
}

function game_over(text){
  alert(text);
  positionX = 5, positionY = 5, velocityX = 0, velocityY = 0, fruit_positionX = 10, fruit_positionY = 10, trailLength = 1;
}

function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            velocityX = -1;
            velocityY = 0;
            break;
        case 65:
            velocityX = -1;
            velocityY = 0;
            break;
        case 38:
            velocityX = 0;
            velocityY = -1;
            break;
        case 87:
            velocityX = 0;
            velocityY = -1;
            break;
        case 39:
            velocityX = 1;
            velocityY = 0;
            break;
        case 68:
            velocityX = 1;
            velocityY = 0;
            break;
        case 40:
            velocityX = 0;
            velocityY = 1;
            break;
        case 83:
            velocityX = 0;
            velocityY = 1;
            break;
    }
}
