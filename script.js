
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


