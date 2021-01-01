var bgm = new Audio('src/snd/bgm.mp3');
bgm.volume = 0.1;
bgm.play();

bgm.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
}, false);

var eat_snd = new Audio('src/snd/eat.mp3');
eat_snd.volume = 1;

function eatsnd(){
  eat_snd.play();
}

var wall_snd = new Audio('src/snd/wall.mp3');
wall_snd.volume = 0.7;

function wallsnd(){
  wall_snd.play();
}
