# Space Fighter

(Link to live site)

## Background and Overview

Space Fighter is a vertical shoot 'em up game inspired by the arcade game [Galaga](https://en.wikipedia.org/wiki/Galaga). 

In the beginning of the game, the player pilots a green ship that starts on the bottom of the screen and automatically shoots a stream of bullets. The player must survive an onslaught of different types of enemies that have different amounts of health and shoot different bullet patterns. You begin with 5 lives; if a bullet from an enemy ship collides with your ship's hitbox, you lose a life. The goal of the game is to achieve the highest score from killing as many ships as possible. Difficulty goes up by introducing new, harder enemies as the player reaches a certain time and increasing the spawn rate of enemies as the player survives up to a certain point.

The score system is dependent on how many enemies you kill and what kind of enemies you kill. A score bonus at game over is assigned depending on how long you survive and how many enemies you kill. Players can compete for the top score in a leaderboard!

## In-game Instructions

Arrow keys - Move the ship
Z - Shoot

## Functionality & MVPs
- [ ] Create player ship that moves around the game screen
- [ ] Generate enemy ships and bullets
- [ ] Player will lose a life if an enemy bullet collides with player
- [ ] Enemy loses health or is destroyed if a player bullet collides with enemy ship
- [ ] Create new enemies at different points of in-game time counter
- [ ] Player reaches a "game over" state once they reach zero lives
- [ ] Score at end of game is calculated properly

### Bonus Features
- [ ] Global leaderboard that keeps track of every score calculated from game over
- [ ] At the end of the game, let the user input a name for a leaderboard
- [ ] Wave system that increments based on enemies killed or time spent in a run
- [ ] Power-ups for the player (temporary stronger shot, bombs that clear the screen, hyper system etc.)
- [ ] Individual boss ships with much more health that players must destroy to end a wave
- [ ] Multiplayer functionality where two players can co-op in the same game (websockets)

### Wireframe

![wireframe](https://raw.githubusercontent.com/peteryao7/space-fighter/master/space-fighter-wireframe.png)

## Architecture and Technologies
- Vanilla JavaScript for game logic and overall structure
- HTML5 Canvas for rendering
- WebAudioAPI or Audio for background music and sound effects
- Webpack to bundle scripts
- React.js to structure webpage

### Scripts
- `game.js` main structure of the canvas, holds center of game logic, renders canvas every frame with requestAnimationFrame
- `ship.js` handles logic for ship health, bullet pattern etc.
- `bullet.js` handles movement logic for bullets and collision logic between ships

## Implementation Timeline

### Day 1: Setting up the project
- Set up Webpack
- Render a Canvas element to the page
- Play background music on page

### Day 2: Creating ships and user input
- Implement `ship.js` and generate a ship
- Make a player ship that can move around the screen with arrow keys
- Make enemy ships that will generate from the top and sides of the screen

### Day 3: Creating bullets and bullet interaction with ships
- Implement `bullet.js` and collision logic
- Ships can shoot bullets

### Day 4: Integrating sprites and life/score system
- Draw sprites for ships and bullets
- Write a formula for the scoring system and implement a score function
- Give each ship a life system based on bullet collision
- Render game over screen when player has zero lives

### Day 5: Adding to webpage
- Add other elements to page (title, instructions to play, enemy ship information, about me)
- Begin testing for bugs in the game
- Attempt to deploy project

### Day 6: Styling and testing
- Webpage styling
- More testing for in-game bugs

### Day 7: More styling and testing
- Continue styling the webpage and testing for bugs
- Start working on bonus features if there is time
