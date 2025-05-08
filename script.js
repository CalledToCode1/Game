



const bgCanvas = document.getElementById("backgroundCanvas");
const playerCanvas = document.getElementById("foregroundCanvas");
const bgCtx = bgCanvas.getContext("2d");
const fgCtx = playerCanvas.getContext("2d");

let playerX = 150;
let playerY = 150;

const playerWidth = 50;
const playerHeight = 50;
const playerSpeed = 5;

function drawBackground() {
    bgCtx.fillStyle = "white";
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
}

function drawPlayer(x, y)
{
    fgCtx.clearRect(0, 0, playerCanvas.width, playerCanvas.height);
    fgCtx.fillStyle = "white";
    fgCtx.fillRect(x, y, playerWidth, playerHeight);
}

window.addEventListener("keydown", (e) => {
    switch(e.key) {
        case "w":
            if (y > 0) y -= playerSpeed;
            break;
        case "s":
            if (y < bgCanvas.height - playerHeight) y += playerSpeed;
            break;
        case "a":
            if (x > 0) x -= playerSpeed;
            break;
        case "d":
            if (x < bgCanvas.width - playerWidth) x += playerSpeed;
            break;
    }

    drawBackground();
    drawPlayer();
});

drawBackground();
drawPlayer(100, 100);