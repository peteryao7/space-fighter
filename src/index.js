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
    ctx.fillText("Welcome to Space Fighter!", 500, 120);
    ctx.font = "20px 'Arial'";
    ctx.fillText("Fend off an onslaught of enemy ships!", 500, 210);
    ctx.fillText("Kill all enemies on the screen to go to the next wave.", 500, 300);
    ctx.fillText("Survive for as long as you can!", 500, 390);
    ctx.font = "60px 'Impact'";
    ctx.fillText("PRESS ENTER TO START", 500, 520);
    ctx.textAlign = "left";

    document.body.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            ctx.clearRect(0,0,1000, 600)
            new Game(ctx);
        }
    });
});