
window.addEventListener("DOMContentLoaded", function () {
    var c = document.getElementById("myCanvas");

    if (c && c.getContext) {
        var ctx = c.getContext("2d");


        ctx.moveTo(0, 0);
        ctx.lineTo(400, 200);
        ctx.stroke();

    } else {

        console.error("Canvas is not working");

    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, size, size);
}

window.addEventListener("keydown", function(e)  {
    switch (e.key) {
        case "w":
        

    }
        
});


