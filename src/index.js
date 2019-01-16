import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.font = "100px Arial";
    ctx.fillText("Press Enter to start", 100, 300)

    document.body.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            ctx.clearRect(0,0,1000, 600)
            new Game(ctx);
        }
    });
});