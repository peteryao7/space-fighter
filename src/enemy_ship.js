import Bullet from "./bullet";
const shipImage = new Image();
shipImage.src = "../ships.png";

class EnemyShip {
  constructor(game, center, difficulty, image) {
    this.game = game;
    this.size = {x: 35, y: 35};
    this.center = center;
    this.patrolX = 0;
    this.speedX = 0.5;
    
    this.difficulty = difficulty
    this.image = image
  }

  update() {
    if (this.patrolX < 0 || this.patrolX > 40) {
      this.speedX = -this.speedX;
    }

    this.center.x += this.speedX;
    this.patrolX += -this.speedX;

    if (Math.random() > this.difficulty && !this.game.enemyBelow(this)) {
      this.drawBullet();
    }
  }

  drawRect(ctx, body) {
    // (.png path, x/y coords at .png, size of rect in .png, 
    // x/y coords on canvas, size of rect in canvas)

    ctx.fillRect(
      body.center.x - body.size.x / 2,
      body.center.y - body.size.y / 2,
      body.size.x,
      body.size.y
    );
  }

  drawBullet() {
    if (this.image < 0.1) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
    } else if (this.image < 0.2) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
    } else if (this.image < 0.3) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
    } else if (this.image < 0.4) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
    } else if (this.image < 0.5) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
    } else if (this.image < 0.6) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
    } else if (this.image < 0.7) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
    } else if (this.image < 0.8) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
    } else if (this.image < 0.9) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
    } else {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
    }
  }

  drawShip() {
    if (this.image < 0.1) {
      this.game.ctx.drawImage(shipImage, 24, 24, 27, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.2) {
      this.game.ctx.drawImage(shipImage, 61, 24, 28, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.3) {
      this.game.ctx.drawImage(shipImage, 99, 24, 27, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.4) {
      this.game.ctx.drawImage(shipImage, 137, 24, 27, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.5) {
      this.game.ctx.drawImage(shipImage, 174, 24, 28, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.6) {
      this.game.ctx.drawImage(shipImage, 212, 24, 27, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.7) {
      this.game.ctx.drawImage(shipImage, 249, 24, 28, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.8) {
      this.game.ctx.drawImage(shipImage, 287, 24, 27, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.9) {
      this.game.ctx.drawImage(shipImage, 324, 24, 28, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else {
      this.game.ctx.drawImage(shipImage, 362, 24, 28, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    }
  }
}

export default EnemyShip;
