const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
resize();
const framelimit = 15;

function resize() {
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth;
    const gridSize = 20, tileCount_X = canvas.width / gridSize, tileCount_Y = canvas.height / gridSize;
}

window.addEventListener('resize', resize, false);

window.onload = () => {
    document.addEventListener("keydown", keyPush);
    window.addEventListener('resize', resize, false);
    setInterval(game, 1000 / framelimit);
}
