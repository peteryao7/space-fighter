# Space Fighter

[Live Site!](https://peteryao7.github.io/space-fighter/dist/)

## Background and Overview

Space Fighter is a vertical shoot 'em up game inspired by the arcade game [Galaga](https://en.wikipedia.org/wiki/Galaga) and [Space Invaders](https://en.wikipedia.org/wiki/Space_Invaders). 

Attack an onslaught on enemy ships attacking you head-on! Eliminate every single enemy on the screen to advance to the next wave. Survive for as long as you can!

## In-game Instructions

Arrow keys - Move the ship

Z - Shoot

## Architecture and Technologies
- JavaScript
- HTML5 Canvas
- Webpack

## Core Features
Player ship movement is handled with an event listener that modifies an array of booleans whenever a key is pressed to rerender the ship in a new position.

```
// north, east, south, west (clockwise), bullet shot
    this.movingDirections = [false, false, false, false, false];
```
Every entity (enemy ship, player ship, bullets) on the screen is kept in one array and is removed when something goes offscreen on two object collide with each other.

```
this.bodies = this.createEnemies(this.difficulty).concat([
      new PlayerShip(this, this.gameSize)
    ]);
```

The collision detection function works by comparing whether an element is within one another.

```
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
```