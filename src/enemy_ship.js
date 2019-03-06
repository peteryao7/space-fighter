import Bullet from "./bullet";
const shipImage1 = new Image();
shipImage1.src = "../dist/enemy_01.png";
const shipImage2 = new Image();
shipImage2.src = "../dist/enemy_02.png";
const shipImage3 = new Image();
shipImage3.src = "../dist/enemy_03.png";
const shipImage4 = new Image();
shipImage4.src = "../dist/enemy_04.png";
const shipImage5 = new Image();
shipImage5.src = "../dist/enemy_05.png";
const shipImage6 = new Image();
shipImage6.src = "../dist/enemy_06.png";
const shipImage7 = new Image();
shipImage7.src = "../dist/enemy_07.png";
const shipImage8 = new Image();
shipImage8.src = "../dist/enemy_08.png";
const shipImage9 = new Image();
shipImage9.src = "../dist/enemy_09.png";
const shipImage10 = new Image();
shipImage10.src = "../dist/enemy_10.png";


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
    if (this.image < 0.05) {
      let bullet1 = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 + 3 }, { x: -2, y: 3 });
      this.game.addBody(bullet1);
      let bullet2 = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 + 3 }, { x: 0, y: 3 });
      this.game.addBody(bullet2);
      let bullet3 = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 + 3 }, { x: 2, y: 3 });
      this.game.addBody(bullet3);
    } else if (this.image < 0.15) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 + 3 }, { x: 0, y: 0.5 });
      this.game.addBody(bullet);
    } else if (this.image < 0.2) {
      let bullet1 = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 + 3}, { x: -0.5, y: 2 });
      this.game.addBody(bullet1);
      let bullet2 = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 + 3 }, { x: 0.5, y: 2 });
      this.game.addBody(bullet2);
    } else if (this.image < 0.3) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: 0, y: 6 });
      this.game.addBody(bullet);
    } else if (this.image < 0.6) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
    } else if (this.image < 0.65) {
      for (let i = 0; i < 5; i++) {
        let bullet = new Bullet({ x: this.center.x - 15 + 5 * i, y: this.center.y + this.size.x / 2 + 3 }, { x: 0, y: 3 });
        this.game.addBody(bullet);
      }
    } else if (this.image < 0.75) {
      let bullet1 = new Bullet({ x: this.center.x - 15, y: this.center.y + this.size.x / 2 + 3}, { x: 0.2, y: 2 });
      this.game.addBody(bullet1);
      let bullet2 = new Bullet({ x: this.center.x + 15, y: this.center.y + this.size.x / 2 + 3}, { x: -0.2, y: 2 });
      this.game.addBody(bullet2);
    } else if (this.image < 0.8) {
      let bullet = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 + 3 }, { x: 8 * Math.random() - 4, y: 1 });
      this.game.addBody(bullet);
    } else if (this.image < 0.9) {
      let bullet1 = new Bullet({ x: this.center.x - 15, y: this.center.y + this.size.x / 2 + 3}, { x: 0, y: 2 });
      this.game.addBody(bullet1);
      let bullet2 = new Bullet({ x: this.center.x + 15, y: this.center.y + this.size.x / 2 + 3 }, { x: 0, y: 2 });
      this.game.addBody(bullet2);
    } else {
      let bullet1 = new Bullet({ x: this.center.x - 10, y: this.center.y + this.size.x / 2 + 3}, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet1);
      let bullet2 = new Bullet({ x: this.center.x, y: this.center.y + this.size.x / 2 + 3 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet2);
      let bullet3 = new Bullet({ x: this.center.x + 10, y: this.center.y + this.size.x / 2 + 3 }, { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet3);
    }
  }

  drawShip() {
    if (this.image < 0.05) {
      this.game.ctx.drawImage(shipImage1, 0, 0, 40, 40, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.15) {
      this.game.ctx.drawImage(shipImage2, 0, 0, 40, 40, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.2) {
      this.game.ctx.drawImage(shipImage3, 0, 0, 40, 40, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.3) {
      this.game.ctx.drawImage(shipImage4, 0, 0, 40, 40, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.6) {
      this.game.ctx.drawImage(shipImage5, 0, 0, 40, 40, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.65) {
      this.game.ctx.drawImage(shipImage6, 0, 0, 40, 40, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.75) {
      this.game.ctx.drawImage(shipImage7, 0, 0, 40, 40, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.8) {
      this.game.ctx.drawImage(shipImage8, 0, 0, 40, 40, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else if (this.image < 0.9) {
      this.game.ctx.drawImage(shipImage9, 0, 0, 40, 40, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    } else {
      this.game.ctx.drawImage(shipImage10, 0, 0, 40, 40, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);
    }
  }
}

export default EnemyShip;
