var canvas;
var ctx;

//input variables
var upKey;
var rightKey;
var downKey;
var leftKey;

var gameLoop;
var player;

window.onload = function() {
    canvas = document.getElementById("myCanvas"); //make sure this works ============
    ctx = canvas.getContext("2d");

    //inputs set up
    setupInputs();

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

function setupInputs() {
    document.addEventListener("keydown", function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = true;
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = true;
        } else if (event.key === "s" || event.key === "ArrowRight") {
            rightKey = true;
        } else if (event.key === "d" || event.key === "ArrowDown") {
            downKey = true;
        }
    });

    document.addEventListener("keyUp", function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = false;
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = false;
        } else if (event.key === "s" || event.key === "ArrowRight") {
            rightKey = false;
        } else if (event.key === "d" || event.key === "ArrowDown") {
            downKey = false;
        }
    });
}
