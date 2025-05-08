



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

function drawPlayer()
{
    fgCtx.clearRect(0, 0, playerCanvas.width, playerCanvas.height);
    fgCtx.fillStyle = "light blue";
    fgCtx.fillRect(playerX, playerY, playerWidth, playerHeight);
}

window.addEventListener("keydown", (e) => {
    switch(e.key) {
        case "w":
            if (playerY > 0) playerY -= playerSpeed;
            break;
        case "s":
            if (playerY < bgCanvas.height - playerHeight) playerY += playerSpeed;
            break;
        case "a":
            if (playerX > 0) playerX -= playerSpeed;
            break;
        case "d":
            if (playerX < bgCanvas.width - playerWidth) playerY += playerSpeed;
            break;
    }

    drawBackground();
    drawPlayer();
});

drawBackground();
drawPlayer();