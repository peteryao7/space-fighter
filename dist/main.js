/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Bullet {\n  constructor(center, velocity) {\n    this.size = {x: 3, y: 3};\n\n    // bullet creation point\n    this.center = center;\n    this.velocity = velocity;\n\n    // bullet's own position not relative to ship's after generation\n    this.bulletPos = [];\n    this.radius = 1;\n  }\n\n  update() {\n    this.center.x += this.velocity.x;\n    this.center.y += this.velocity.y;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/enemy_ship.js":
/*!***************************!*\
  !*** ./src/enemy_ship.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nconst shipImage = new Image();\nshipImage.src = \"../dist/ships.png\";\n\nclass EnemyShip {\n  constructor(game, center, difficulty, image) {\n    this.game = game;\n    this.size = {x: 35, y: 35};\n    this.center = center;\n    this.patrolX = 0;\n    this.speedX = 0.5;\n    \n    this.difficulty = difficulty\n    this.image = image\n  }\n\n  update() {\n    if (this.patrolX < 0 || this.patrolX > 40) {\n      this.speedX = -this.speedX;\n    }\n\n    this.center.x += this.speedX;\n    this.patrolX += -this.speedX;\n\n    if (Math.random() > this.difficulty && !this.game.enemyBelow(this)) {\n      this.drawBullet();\n    }\n  }\n\n  drawRect(ctx, body) {\n    // (.png path, x/y coords at .png, size of rect in .png, \n    // x/y coords on canvas, size of rect in canvas)\n\n    ctx.fillRect(\n      body.center.x - body.size.x / 2,\n      body.center.y - body.size.y / 2,\n      body.size.x,\n      body.size.y\n    );\n  }\n\n  drawBullet() {\n    if (this.image < 0.1) {\n      let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });\n      this.game.addBody(bullet);\n    } else if (this.image < 0.2) {\n      let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });\n      this.game.addBody(bullet);\n    } else if (this.image < 0.3) {\n      let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });\n      this.game.addBody(bullet);\n    } else if (this.image < 0.4) {\n      let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });\n      this.game.addBody(bullet);\n    } else if (this.image < 0.5) {\n      let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });\n      this.game.addBody(bullet);\n    } else if (this.image < 0.6) {\n      let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });\n      this.game.addBody(bullet);\n    } else if (this.image < 0.7) {\n      let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });\n      this.game.addBody(bullet);\n    } else if (this.image < 0.8) {\n      let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });\n      this.game.addBody(bullet);\n    } else if (this.image < 0.9) {\n      let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });\n      this.game.addBody(bullet);\n    } else {\n      let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: this.center.x, y: this.center.y + this.size.x / 2 }, { x: Math.random() - 0.5, y: 2 });\n      this.game.addBody(bullet);\n    }\n  }\n\n  drawShip() {\n    if (this.image < 0.1) {\n      this.game.ctx.drawImage(shipImage, 24, 24, 27, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);\n    } else if (this.image < 0.2) {\n      this.game.ctx.drawImage(shipImage, 61, 24, 28, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);\n    } else if (this.image < 0.3) {\n      this.game.ctx.drawImage(shipImage, 99, 24, 27, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);\n    } else if (this.image < 0.4) {\n      this.game.ctx.drawImage(shipImage, 137, 24, 27, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);\n    } else if (this.image < 0.5) {\n      this.game.ctx.drawImage(shipImage, 174, 24, 28, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);\n    } else if (this.image < 0.6) {\n      this.game.ctx.drawImage(shipImage, 212, 24, 27, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);\n    } else if (this.image < 0.7) {\n      this.game.ctx.drawImage(shipImage, 249, 24, 28, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);\n    } else if (this.image < 0.8) {\n      this.game.ctx.drawImage(shipImage, 287, 24, 27, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);\n    } else if (this.image < 0.9) {\n      this.game.ctx.drawImage(shipImage, 324, 24, 28, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);\n    } else {\n      this.game.ctx.drawImage(shipImage, 362, 24, 28, 28, this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EnemyShip);\n\n\n//# sourceURL=webpack:///./src/enemy_ship.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enemy_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy_ship */ \"./src/enemy_ship.js\");\n/* harmony import */ var _player_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player_ship */ \"./src/player_ship.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\n\n\n\nconst shipImage = new Image();\nshipImage.src = \"../dist/ships.png\";\n\nconst playerImage = new Image();\nplayerImage.src = \"../dist/ships.png\";\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.gameSize = { x: 1000, y: 600 };\n    this.difficulty = 0.90;\n    this.bodies = this.createEnemies(this.difficulty).concat([\n      new _player_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, this.gameSize)\n    ]);\n\n    this.wave = 1;\n\n    this.animate();\n  }\n\n  createEnemies(difficulty) {\n    let enemies = [];\n    let x, y;\n    for(let j = 0; j < 14; j++) {\n      x = 75 + (j * 81);\n      for(let k = 0; k < 3; k++) {\n        y = 75 + (k * 60);\n        enemies.push(new _enemy_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, { x, y }, difficulty, Math.random())); \n      }\n    }\n    return enemies;\n  }\n\n  animate() {\n    this.drawBackground(this.ctx);\n    let death = this.isPlayerDead();\n\n    if(death) {\n      this.gameOver();\n    }\n    else {\n      this.update();\n      this.draw(this.ctx, this.gameSize);\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  update() {\n    // filter out all objects that collided w/ something\n    this.bodies = this.bodies.filter(body => this.notCollidingWithAnything(this.bodies, body));\n\n    // remove objects that go out of bounds\n    for (let i = 0; i < this.bodies.length; i++) {\n      this.bodies[i].update();\n      if (\n        this.bodies[i].center.x > 1000 ||\n        this.bodies[i].center.y > 600 ||\n        this.bodies[i].center.x < 0 ||\n        this.bodies[i].center.y < 0\n      ) {\n        this.bodies.splice(i, 1);\n      }\n    }\n\n    \n    let enemy_ctr = 0;\n    // refresh enemies of 24 if none are left\n    for(let j = 0; j < this.bodies.length; j++) {\n      if (this.bodies[j] instanceof _enemy_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n      enemy_ctr += 1;\n    }\n    \n    if (enemy_ctr === 0) {\n      this.difficulty = this.difficulty - 0.05\n      this.wave += 1;\n      this.bodies = this.createEnemies(this.difficulty).concat([\n        new _player_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, this.gameSize)\n      ]);\n    }\n  }\n\n  notCollidingWithAnything(arr, b1) {\n    return arr.filter(b2 => this.findCollision(b1, b2)).length === 0;\n  }\n\n  findCollision(b1, b2) {\n    if (!(b1 instanceof _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"] && b2 instanceof _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]))\n      return this.colliding(b1, b2);\n  }\n\n  colliding(b1, b2) {\n    // cases where there's no collision\n    return !(\n      b1 === b2 ||\n      b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 ||\n      b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 ||\n      b1.center.x - b1.size.x / 2 > b2.center.x + b2.size.x / 2 ||\n      b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2\n    );\n  }\n\n  isPlayerDead() {\n    let player = this.bodies.filter(body => body instanceof _player_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])[0]\n\n    if (!player)\n      return false\n  \n    for (let i = 0; i < this.bodies.length; i++) {\n      if (this.colliding(player, this.bodies[i]))\n        return true;\n    }\n\n    return false;\n  }\n\n  draw(gameSize) {\n    this.ctx.clearRect(0, 0, gameSize.x, gameSize.y);\n    for (let i = 0; i < this.bodies.length; i++) {\n      this.drawRect(this.bodies[i]);\n    }\n  }\n\n  addBody(body) {\n    this.bodies.push(body);\n  }\n\n  enemyBelow(enemy_ship) {\n    return (\n      this.bodies.filter(b => {\n        return (\n          b instanceof _enemy_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"] &&\n          b.center.y > enemy_ship.center.y &&\n          b.center.x - enemy_ship.center.x < enemy_ship.size.x\n        );\n      }).length > 0\n    );\n  }\n\n  drawRect(body) {\n    if (body instanceof _enemy_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      body.drawShip();\n    } else if (body instanceof _player_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.ctx.drawImage(\n        playerImage,\n        550,\n        371,\n        27,\n        20,\n        body.center.x - body.size.x / 2,\n        body.center.y - body.size.y / 2,\n        body.size.x,\n        body.size.y\n      );\n    } else {\n      this.ctx.fillStyle = \"#\" + (((1 << 24) * Math.random()) | 0).toString(16);\n      this.ctx.fillRect(\n        body.center.x - body.size.x / 2,\n        body.center.y - body.size.y / 2,\n        body.size.x * 1.5,\n        body.size.y * 1.5\n      );\n    }\n  }\n\n  gameOver() {\n    this.ctx.fillStyle = \"black\";\n    this.ctx.fillRect(0, 0, 1000, 600);\n    this.ctx.fillStyle = \"red\";\n    this.ctx.font = \"36px 'Press Start 2P', cursive\";\n    this.ctx.textAlign = \"center\";\n    this.ctx.fillText(`You survived ${this.wave} ${this.wave_s()}!`, 500, 170)\n    this.ctx.fillText(\"Thanks for playing!\", 500, 230);\n    this.ctx.fillText(\"Press Enter to play again\", 500, 400);\n  }\n\n  wave_s() {\n    if (this.wave === 1)\n      return \"wave\"\n    else\n      return \"waves\"\n\n  }\n\n  // step() {\n  //   this.enemy_ships.forEach(enemy_ship => {\n  //     enemy_ship.move();\n  //   });\n\n  //   this.player.move();\n  // }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, 1000, 600);\n    ctx.fillStyle = \"gray\";\n    ctx.fillRect(0, 600, 1000, 40);\n    ctx.fillStyle = \"white\";\n    ctx.font = \"16px 'Arial', cursive\";\n    ctx.textAlign = \"left\";\n    ctx.fillText(`Wave: ${this.wave}`, 10, 20)\n    ctx.fillText(`Bullets on screen: ${this.bulletCount()}`, 100, 20);\n  }\n\n  bulletCount() {\n    let ctr = 0;\n    for(let i = 0; i < this.bodies.length; i++) {\n      if (this.bodies[i] instanceof _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n        ctr += 1;\n      }\n    }\n    return ctr;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById('canvas');\n    let ctx = canvas.getContext('2d');\n\n    ctx.font = \"100px Arial\";\n    ctx.fillText(\"Press Enter to start\", 100, 300)\n\n    document.body.addEventListener(\"keydown\", function (event) {\n        if (event.keyCode == 13) {\n            ctx.clearRect(0,0,1000, 600)\n            new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n        }\n    });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player_ship.js":
/*!****************************!*\
  !*** ./src/player_ship.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\n\nconst playerImage = new Image();\nplayerImage.src = \"../dist/ships.png\";\n\n// 27 x 20\nclass PlayerShip {\n  constructor(game, gameSize) {\n    this.game = game;\n    this.size = {x: 10, y: 10};\n    this.gameSize = gameSize;\n    this.center = {x: this.gameSize.x / 2, y: this.gameSize.y - this.size.x };\n\n    // north, east, south, west (clockwise), bullet shot\n    this.movingDirections = [false, false, false, false, false];\n    this.bulletCounter = 0;\n\n    this.addListeners();\n  }\n\n  addListeners() {\n    document.addEventListener(\"keydown\", event => {\n        if (event.key === \"w\" || event.key === \"ArrowUp\") {\n        this.movingDirections[0] = true;\n      }\n        if (event.key === \"a\" || event.key === \"ArrowLeft\") {\n        this.movingDirections[3] = true;\n      }\n        if (event.key === \"s\" || event.key === \"ArrowDown\") {\n        this.movingDirections[2] = true;\n      }\n        if (event.key === \"d\" || event.key === \"ArrowRight\") {\n        this.movingDirections[1] = true;\n      }\n        if (event.key === \"z\") {\n        this.movingDirections[4] = true;\n      }\n    });\n\n    document.addEventListener(\"keyup\", event => {\n        if (event.key === \"w\" || event.key === \"ArrowUp\") {\n        this.movingDirections[0] = false;\n      }\n        if (event.key === \"a\" || event.key === \"ArrowLeft\") {\n        this.movingDirections[3] = false;\n      }\n        if (event.key === \"s\" || event.key === \"ArrowDown\") {\n        this.movingDirections[2] = false;\n      }\n        if (event.key === \"d\" || event.key === \"ArrowRight\") {\n        this.movingDirections[1] = false;\n      }\n        if (event.key === \"z\") {\n        this.movingDirections[4] = false;\n      }\n    });\n  }\n\n  update() {\n\n    if (this.movingDirections[0] && this.center.y - 400 > 0) {\n      this.center.y -= 2;\n    }\n    if (this.movingDirections[3] && this.center.x - 25 > 0) {\n      this.center.x -= 2;\n    }\n    if (this.movingDirections[2] && this.center.y + 25 < 600) {\n      this.center.y += 2;\n    }\n    if (this.movingDirections[1] && this.center.x + 27 + 5 < 1000) {\n      this.center.x += 2;\n    }\n    this.updateBullet();\n  }\n\n    updateBullet() {\n        if (this.movingDirections[4] && this.bulletCounter === 0) {\n            this.addBullet();\n        }\n        this.bulletCounter += 1;\n\n        if(this.bulletCounter === 15) {\n            this.bulletCounter = 0;\n        }\n\n    }\n\n    addBullet() {\n        let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: this.center.x, y: this.center.y - this.size.x / 2 },\n            { x: 0, y: -6 }\n        );\n        this.game.addBody(bullet);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerShip);\n\n\n//# sourceURL=webpack:///./src/player_ship.js?");

/***/ })

/******/ });