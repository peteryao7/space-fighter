import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.font = "80px Arial";
    ctx.fillText("Press Enter to start", 100, 300)
    ctx.font = "40px Arial";
    ctx.fillText("Instructions: Arrow keys to move, Z to shoot", 100, 450)

    document.body.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            ctx.clearRect(0,0,1000, 600)
            new Game(ctx);
        }
    });
});