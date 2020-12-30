const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
resize();
const framelimit = 15;

const gridSize = 30, tileCount_X = canvas.width / gridSize, tileCount_Y = canvas.height / gridSize;

let positionX = 5, positionY = 5;
let fruit_positionX = 10, fruit_positionY = 10;

let velocityX = 0, velocityY = 0;

const trail = [];
let trailLength = 1;
let score = 0;
let best_score = 0;
let bss = 0;


function resize() {
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth;
    const gridSize = 30, tileCount_X = canvas.width / gridSize, tileCount_Y = canvas.height / gridSize;
}

window.addEventListener('resize', resize, false);

window.onload = () => {
    document.addEventListener("keydown", keyPush);
    window.addEventListener('resize', resize, false);
    setInterval(game, 1000 / framelimit);
    help();
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
