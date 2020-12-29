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

    ctx.fillStyle = "#333538";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white"
    for(let i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize-2, gridSize-2)
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
    ctx.fillRect(fruit_positionX * gridSize, fruit_positionY * gridSize, gridSize-2, gridSize-2);
}
