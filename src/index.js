import Game from "./game";

const splashBackground = new Image();
splashBackground.src =
  "../dist/starry-night.jpg";

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.drawImage(splashBackground, 0, 0, 20, 20, 0, 0, 1000, 600);
    // ctx.fillStyle = "red";
    // ctx.fillRect(0,0,1000,600);
    ctx.textAlign = "center";
    ctx.font = "60px 'Impact'";
    ctx.fillStyle = "white";
    ctx.fillText("Welcome to Space Fighter!", 500, 200);
    ctx.fillText("PRESS ENTER TO START", 500, 450);
    ctx.textAlign = "left";

    document.body.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            ctx.clearRect(0,0,1000, 600)
            new Game(ctx);
        }
    });
});