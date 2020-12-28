function ate(){
  trailLength++;
  fruit_positionX = Math.floor(Math.random()*tileCount_X);
  fruit_positionY = Math.floor(Math.random()*tileCount_Y);
}

function game_over(text){
  if(trailLength > best_score){
    Toast.fire({
      icon: 'success',
      iconColor: '#545454',
      title: 'Nice! You did great!!\nBest Score : ' + trailLength
    })
    best_score = trailLength;
  }
  else{
    Toast.fire({
      icon: 'error',
      iconColor: '#545454',
      title: text
    })
  }
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
