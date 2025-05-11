var canvas;
var ctx;

var gameLoop;
var player;

window.onload = function() {
    canvas = document.getElementById("myCanvas"); //make sure this works ============
    ctx = canvas.getContext("2d");

    player = new Player(50, 200); //created player

    //start game loop
    gameLoop = setInterval(step, 1000/30); //1 second divided by 30
    //so basically fps?
}

function step() { //will also be used for other objects
    //step player
    player.step();

    //Draw Everything
    draw();
}

function draw() {
    //clear the canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 50, 50);

    //draw player
    player.draw();
}
