class Bullet {
  constructor(center, velocity) {
    this.size = {x: 3, y: 3};

    // bullet creation point
    this.center = center;
    this.velocity = velocity;

    // bullet's own position not relative to ship's after generation
    this.bulletPos = [];
    this.radius = 1;
  }

  update() {
    this.center.x += this.velocity.x;
    this.center.y += this.velocity.y;
  }
}

export default Bullet;
