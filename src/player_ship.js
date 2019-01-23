import Bullet from './bullet'

const playerImage = new Image();
playerImage.src = "../ships.png";

// 27 x 20
class PlayerShip {
  constructor(game, gameSize) {
    this.game = game;
    this.size = {x: 10, y: 10};
    this.gameSize = gameSize;
    this.center = {x: this.gameSize.x / 2, y: this.gameSize.y - this.size.x };

    // north, east, south, west (clockwise), bullet shot
    this.movingDirections = [false, false, false, false, false];
    this.bulletCounter = 0;

    this.addListeners();
  }

  addListeners() {
    document.addEventListener("keydown", event => {
        if (event.key === "w" || event.key === "ArrowUp") {
        this.movingDirections[0] = true;
      }
        if (event.key === "a" || event.key === "ArrowLeft") {
        this.movingDirections[3] = true;
      }
        if (event.key === "s" || event.key === "ArrowDown") {
        this.movingDirections[2] = true;
      }
        if (event.key === "d" || event.key === "ArrowRight") {
        this.movingDirections[1] = true;
      }
        if (event.key === "z") {
        this.movingDirections[4] = true;
      }
    });

    document.addEventListener("keyup", event => {
        if (event.key === "w" || event.key === "ArrowUp") {
        this.movingDirections[0] = false;
      }
        if (event.key === "a" || event.key === "ArrowLeft") {
        this.movingDirections[3] = false;
      }
        if (event.key === "s" || event.key === "ArrowDown") {
        this.movingDirections[2] = false;
      }
        if (event.key === "d" || event.key === "ArrowRight") {
        this.movingDirections[1] = false;
      }
        if (event.key === "z") {
        this.movingDirections[4] = false;
      }
    });
  }

  update() {

    if (this.movingDirections[0] && this.center.y - 400 > 0) {
      this.center.y -= 2;
    }
    if (this.movingDirections[3] && this.center.x - 25 > 0) {
      this.center.x -= 2;
    }
    if (this.movingDirections[2] && this.center.y + 25 < 600) {
      this.center.y += 2;
    }
    if (this.movingDirections[1] && this.center.x + 27 + 5 < 1000) {
      this.center.x += 2;
    }
    this.updateBullet();
  }

    updateBullet() {
        if (this.movingDirections[4] && this.bulletCounter === 0) {
            this.addBullet();
        }
        this.bulletCounter += 1;

        if(this.bulletCounter === 15) {
            this.bulletCounter = 0;
        }

    }

    addBullet() {
        let bullet = new Bullet({ x: this.center.x, y: this.center.y - this.size.x / 2 },
            { x: 0, y: -6 }
        );
        this.game.addBody(bullet);
    }
}

export default PlayerShip;
