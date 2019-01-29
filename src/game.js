import EnemyShip from "./enemy_ship";
import PlayerShip from "./player_ship";
import Bullet from "./bullet";

const shipImage = new Image();
shipImage.src = "../dist/ships.png";

const playerImage = new Image();
playerImage.src = "../dist/ships.png";

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.gameSize = { x: 1000, y: 600 };
    this.difficulty = 0.95; 
    this.bodies = this.createEnemies(this.difficulty).concat([
      new PlayerShip(this, this.gameSize)
    ]);

    this.wave = 7;

    this.animate();
  }

  createEnemies() {
    let enemies = [];
    let x, y;
    for(let j = 0; j < 14; j++) {
      x = 75 + (j * 81);
      for(let k = 0; k < 3; k++) {
        y = 75 + (k * 60);
        enemies.push(new EnemyShip(this, { x, y }, this.difficulty, Math.random())); 
      }
    }
    return enemies;
  }

  animate() {
    this.drawBackground(this.ctx);
    let death = this.isPlayerDead();


    if(death) {
      this.gameOver();
    }
    else {
      this.update();
      this.draw(this.ctx, this.gameSize);
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  update() {
    // filter out all objects that collided w/ something
    this.bodies = this.bodies.filter(body => this.notCollidingWithAnything(this.bodies, body));

    // remove objects that go out of bounds
    for (let i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update();
      if (
        this.bodies[i].center.x > 1000 ||
        this.bodies[i].center.y > 600 ||
        this.bodies[i].center.x < 0 ||
        this.bodies[i].center.y < 0
      ) {
        this.bodies.splice(i, 1);
      }
    }

    
    let enemy_ctr = 0;
    // refresh enemies if none are left
    for(let j = 0; j < this.bodies.length; j++) {
      if (this.bodies[j] instanceof EnemyShip)
      enemy_ctr += 1;
    }
    
    if (enemy_ctr === 0) {
      this.difficulty = this.difficulty - 0.005
      this.wave += 1;
      this.bodies = this.createEnemies().concat([
        new PlayerShip(this, this.gameSize)
      ]);
    }
  }

  notCollidingWithAnything(arr, b1) {
    return arr.filter(b2 => this.findCollision(b1, b2)).length === 0;
  }

  findCollision(b1, b2) {
    if (!(b1 instanceof Bullet && b2 instanceof Bullet))
      return this.colliding(b1, b2);
  }

  colliding(b1, b2) {
    // cases where there's no collision
    return !(
      b1 === b2 ||
      b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 ||
      b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 ||
      b1.center.x - b1.size.x / 2 > b2.center.x + b2.size.x / 2 ||
      b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2
    );
  }

  isPlayerDead() {
    let player = this.bodies.filter(body => body instanceof PlayerShip)[0]

    if (!player)
      return false
  
    for (let i = 0; i < this.bodies.length; i++) {
      if (this.colliding(player, this.bodies[i]))
        return true;
    }

    return false;
  }

  draw(gameSize) {
    this.ctx.clearRect(0, 0, gameSize.x, gameSize.y);
    for (let i = 0; i < this.bodies.length; i++) {
      this.drawRect(this.bodies[i]);
    }
  }

  addBody(body) {
    this.bodies.push(body);
  }

  enemyBelow(enemy_ship) {
    return (
      this.bodies.filter(b => {
        return (
          b instanceof EnemyShip &&
          b.center.y > enemy_ship.center.y &&
          b.center.x - enemy_ship.center.x < enemy_ship.size.x
        );
      }).length > 0
    );
  }

  drawRect(body) {
    if (body instanceof EnemyShip) {
      body.drawShip();
    } else if (body instanceof PlayerShip) {
      this.ctx.drawImage(
        playerImage,
        550,
        371,
        27,
        20,
        body.center.x - body.size.x / 2,
        body.center.y - body.size.y / 2,
        body.size.x,
        body.size.y
      );
    } else {
      this.ctx.fillStyle = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
      this.ctx.fillRect(
        body.center.x - body.size.x / 2,
        body.center.y - body.size.y / 2,
        body.size.x * 1.5,
        body.size.y * 1.5
      );
    }
  }

  gameOver() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, 1000, 600);
    this.ctx.fillStyle = "white";
    this.ctx.font = "36px Impulse bold";
    this.ctx.textAlign = "center";
    this.ctx.fillText(`YOU SURVIVED ${this.wave} ${this.wave_s()}!`, 500, 170)
    this.ctx.fillText("THANKS FOR PLAYING!", 500, 230);
    this.ctx.fillText("PRESS ENTER TO PLAY AGAIN", 500, 400);
  }

  wave_s() {
    if (this.wave === 1)
      return "WAVE"
    else
      return "WAVES"
  }

  drawBackground(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1000, 600);
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 600, 1000, 40);
    ctx.fillStyle = "white";
    ctx.font = "16px 'Arial', cursive";
    ctx.textAlign = "left";
    ctx.fillText(`Wave: ${this.wave}`, 10, 20)
    ctx.fillText(`Bullets on screen: ${this.bulletCount()}`, 100, 20);

    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0,389);
    ctx.lineTo(1000, 389);
    ctx.stroke();

    ctx.fillStyle = "white";
  }

  bulletCount() {
    let ctr = 0;
    for(let i = 0; i < this.bodies.length; i++) {
      if (this.bodies[i] instanceof Bullet) {
        ctr += 1;
      }
    }
    return ctr;
  }
}

export default Game;
