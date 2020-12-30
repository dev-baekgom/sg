function ate(){
  trailLength++;
  score = trailLength * 100;
  fruit_positionX = Math.floor(Math.random()*tileCount_X);
  fruit_positionY = Math.floor(Math.random()*tileCount_Y);
  if(score > best_score){
    Toast.fire({
      icon: 'success',
      iconColor: '#545454',
      title: 'Best Score!!\nScore : ' + score
    })
    best_score = score;
    bss = 1;
  }
  else{
    Toast.fire({
      icon: 'success',
      iconColor: '#545454',
      title: 'Nice!\nScore : ' + score
    })
  }
}

function game_over(text){
  if(bss == 1){
    Toast.fire({
      icon: 'success',
      iconColor: '#545454',
      title: 'You died..\nBut Great Job!!\nScore : ' + score
    })
  }
  else{
    Toast.fire({
      icon: 'error',
      iconColor: '#545454',
      title: text + '\nScore : ' + score
    })
  }
  positionX = 5, positionY = 5, velocityX = 0, velocityY = 0, fruit_positionX = 10, fruit_positionY = 10, trailLength = 1, score = trailLength * 100, bss = 0;
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

function help(){
  Swal.fire({
    width: 'fit-content',
    icon: 'info',
    iconColor: '#545454',
    title: 'Move by arrow-keys.\nEat the fruit to grow!\nDon\'t bite your tail or hit the wall!',
    confirmButton: 'Ok',
    confirmButtonColor: '#545454',
    footer: '<a href="https://github.com/dev-baekgom/" style="color:#545454">My github  <i class="fab fa-github"></i></a>'
  })
}
