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
/******/ 	return __webpack_require__(__webpack_require__.s = "./tokyoBoy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/lib/boy.js":
/*!***************************!*\
  !*** ./assets/lib/boy.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const tokyoBoy = new createjs.SpriteSheet({
  "images": ["assets/sprites/boy.png"],
  "frames": [
    // x, y, width, height, imageIndex*, regX*, regY*
    //stand
   //idx0
    //walk right
    //standleft
        [144, 48, 48, 48],
        [144, 0, 48, 48],
        [144, 144, 48, 48],

        [48, 48, 48, 48],
        [48, 0, 48, 48],
        [48, 144, 48, 48],

        [96, 48, 48, 48],
        [96, 0, 48, 48],
        [96, 144, 48, 48],

        [0, 48, 48, 48],
        [0, 0, 48, 48],
        [0, 144, 48, 48]

    // [33, 323, 30, 40], //idx1
    // [67, 323, 30, 40],
    // [100, 323, 30, 40],
    // [135, 323, 30, 40],
    // [167, 323, 30, 40],
    // [202, 323, 30, 40],
    // [234, 323, 30, 40],
    // [267, 323, 30, 40], //idx8
    // // run left
    // [37, 368, 30, 40], //idx9
    // [71, 368, 30, 40],
    // [104, 368, 30, 40],
    // [139, 368, 30, 40],
    // [171, 368, 30, 40],
    // [206, 368, 30, 40],
    // [238, 368, 30, 40],
    // [271, 368, 30, 40], //idx16
    // // attack
    // [28, 590, 40, 40], //idx17
    // [93, 590, 45, 40],
    // [164, 590, 90, 40],
    // [301, 590, 91, 40], //idx20
    // // jump
    // [133, 548, 30, 40], //idx21
    // [168, 540, 30, 36],
    // [204, 540, 30, 40],
    // [234, 540, 30, 40],
    // [268, 540, 30, 40], //idx25

],
  "animations": {
    "stand": 1,
    "standLeft": 4,
    "standUp": 7,
    "standDown": 10,
    "walkRight": [0, 2],
    "walkLeft": [3, 5],
    "walkUp": [6, 8],
    "walkDown": [9, 11]
  //   "runLeft": [9,16],
  //   "attackRun": {
  //   frames: [0,17,18,19,20,19,18,0],
  //   next: "runRight"
  // },
  //   "attackStand": {
  //   frames: [0,17,18,19,20,19,18,0],
  //   next: "stand"
  //   },
  //   "attackJump": {
  //   frames: [0,17,18,19,20,19,18,0],
  //   next: "jumpCont"
  //   },
  //   "jump": {
  //     frames: [21,22],
  //     next: "jumpCont"
  //   },
  //   "jumpCont": 22,
  //   "landStand": {
  //     frames: [23,24,25],
  //     next: "stand"
  //   },
  //   "landRun": {
  //     frames: [23,24,25],
  //     next: "runRight"
  //   }
  }
});
module.exports = tokyoBoy;


/***/ }),

/***/ "./assets/lib/calculateIntersect.js":
/*!******************************************!*\
  !*** ./assets/lib/calculateIntersect.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


function calculateIntersection(rect1, rect2, x, y) {
  // prevent x|y from being null||undefined
  x = x || 0; y = y || 0;

  // first we have to calculate the
  // center of each rectangle and half of
  // width and height
  var dx, dy, r1={}, r2={};
  r1.cx = rect1.x + x + (r1.hw = (rect1.width /2));
  r1.cy = rect1.y + y + (r1.hh = (rect1.height/2));
  r2.cx = rect2.x + (r2.hw = (rect2.width /2));
  r2.cy = rect2.y + (r2.hh = (rect2.height/2));

  dx = Math.abs(r1.cx-r2.cx) - (r1.hw + r2.hw);
  dy = Math.abs(r1.cy-r2.cy) - (r1.hh + r2.hh);

  if (dx < 0 && dy < 0) {
    return {width:-dx,height:-dy};
  } else {
    return null;
  }
}

module.exports = calculateIntersection;


/***/ }),

/***/ "./assets/lib/fireball.js":
/*!********************************!*\
  !*** ./assets/lib/fireball.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



const fireball = new createjs.SpriteSheet({
  "images": ["assets/sprites/fireball.png"],
  "frames": [

        [120, 260, 60, 60],
        [60, 260, 60, 60],
        [0, 260, 60, 60],

          [260, 195, 65, 65],
          [195, 195, 65, 65],
          [130, 195, 65, 65],
          [65, 195, 65, 65],
          [0, 195, 65, 65],

          [260, 130, 65, 65],
          [195, 130, 65, 65],
          [130, 130, 65, 65],
          [65, 130, 65, 65],
          [0, 130, 65, 65],

          [260, 65, 65, 65],
          [195, 65, 65, 65],
          [130, 65, 65, 65],
          [65, 65, 65, 65],
          [0, 65, 65, 65],

          [260, 0, 65, 65],
          [195, 0, 65, 65],
          [130, 0, 65, 65],
          [65, 0, 65, 65],
          [0, 0, 65, 65],
          [180, 260, 60, 60],






],
  "animations": {
    "invisible": 23,
    "dissolve": {
      // frames: [21, 20, 19, 18, 17, 16, 15, 14, 13]
      frames: [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9]

    },
    "conjured": {
      frames:  [22]
    },

    "firey": {
      frames: [21, 22],
      speed: 0.6
    },

    "conjure": [0, 21, "conjured"],
    "UnNebula": {
      frames: [9, 8, 7, 6, 5, 6, 7, 8],
      speed: 0.7
    },
    "nebula":{
      frames: [0, 10],
      next: "UnNebula"
    }
    // "monsterStand": 8,
    // "smallfire": [1, 3],
    // "fire": [3, 4],
    // "transformToFire": {
    //   frames: [1, 4],
    //   next: "smallfire"
    // },
    // "transform": {
    //   frames: [1, 7],
    //   next: "monsterStand"
    // },
    // "punch": {
    //   frames: [8, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12],
    //   next: "monsterStand"
    // }
  }
});
module.exports = fireball;


/***/ }),

/***/ "./assets/lib/girl.js":
/*!****************************!*\
  !*** ./assets/lib/girl.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const tokyoGirl = new createjs.SpriteSheet({
  "images": ["assets/sprites/girl.png"],
  "frames": [
    // x, y, width, height, imageIndex*, regX*, regY*
    //stand
   //idx0
    //walk right
    //standleft
        [144, 48, 48, 48],
        [144, 0, 48, 48],
        [144, 144, 48, 48],

        [48, 48, 48, 48],
        [48, 0, 48, 48],
        [48, 144, 48, 48],

        [96, 48, 48, 48],
        [96, 0, 48, 48],
        [96, 144, 48, 48],

        [0, 48, 48, 48],
        [0, 0, 48, 48],
        [0, 144, 48, 48]

    // [33, 323, 30, 40], //idx1
    // [67, 323, 30, 40],
    // [100, 323, 30, 40],
    // [135, 323, 30, 40],
    // [167, 323, 30, 40],
    // [202, 323, 30, 40],
    // [234, 323, 30, 40],
    // [267, 323, 30, 40], //idx8
    // // run left
    // [37, 368, 30, 40], //idx9
    // [71, 368, 30, 40],
    // [104, 368, 30, 40],
    // [139, 368, 30, 40],
    // [171, 368, 30, 40],
    // [206, 368, 30, 40],
    // [238, 368, 30, 40],
    // [271, 368, 30, 40], //idx16
    // // attack
    // [28, 590, 40, 40], //idx17
    // [93, 590, 45, 40],
    // [164, 590, 90, 40],
    // [301, 590, 91, 40], //idx20
    // // jump
    // [133, 548, 30, 40], //idx21
    // [168, 540, 30, 36],
    // [204, 540, 30, 40],
    // [234, 540, 30, 40],
    // [268, 540, 30, 40], //idx25

],
  "animations": {
    "stand": 1,
    "standLeft": 4,
    "standUp": 7,
    "standDown": 10,
    "walkRight": [0, 2],
    "walkLeft": [3, 5],
    "walkUp": [6, 8],
    "walkDown": [9, 11]
  //   "runLeft": [9,16],
  //   "attackRun": {
  //   frames: [0,17,18,19,20,19,18,0],
  //   next: "runRight"
  // },
  //   "attackStand": {
  //   frames: [0,17,18,19,20,19,18,0],
  //   next: "stand"
  //   },
  //   "attackJump": {
  //   frames: [0,17,18,19,20,19,18,0],
  //   next: "jumpCont"
  //   },
  //   "jump": {
  //     frames: [21,22],
  //     next: "jumpCont"
  //   },
  //   "jumpCont": 22,
  //   "landStand": {
  //     frames: [23,24,25],
  //     next: "stand"
  //   },
  //   "landRun": {
  //     frames: [23,24,25],
  //     next: "runRight"
  //   }
  }
});
module.exports = tokyoGirl;


/***/ }),

/***/ "./assets/lib/monster.js":
/*!*******************************!*\
  !*** ./assets/lib/monster.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



const monsterman = new createjs.SpriteSheet({
  "images": ["assets/sprites/Boss.png"],
  "frames": [
        [0, 0, 120, 185],
        [120, 0, 120, 160],
        [225, 0, 120, 185],
        [340, 0, 120, 185],
        [445, 0, 110, 185],
        [550, 0, 100, 185],
        [650, 0, 110, 185],
        [0, 650, 115, 170],
        [120, 650, 115, 170],
        [250, 650, 140, 170],
],
  "animations": {
    "dance": {
      frames: [0, 1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1],
      speed: 0.4
    },
    "blast": {
      frames: [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9],
      next: "dance",
      speed: 0.4

    }
    // "monsterStand": 8,
    // "smallfire": [1, 3],
    // "fire": [3, 4],
    // "transformToFire": {
    //   frames: [1, 4],
    //   next: "smallfire"
    // },
    // "transform": {
    //   frames: [1, 7],
    //   next: "monsterStand"
    // },
    // "punch": {
    //   frames: [8, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12],
    //   next: "monsterStand"
    // }
  }
});
module.exports = monsterman;


/***/ }),

/***/ "./tokyoBoy.js":
/*!*********************!*\
  !*** ./tokyoBoy.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const tokyoBoy = __webpack_require__(/*! ./assets/lib/boy */ "./assets/lib/boy.js");
const tokyoGirl = __webpack_require__(/*! ./assets/lib/girl */ "./assets/lib/girl.js");
const monsterman = __webpack_require__(/*! ./assets/lib/monster */ "./assets/lib/monster.js");
const fireball = __webpack_require__(/*! ./assets/lib/fireball */ "./assets/lib/fireball.js");
const calculateIntersection = __webpack_require__(/*! ./assets/lib/calculateIntersect */ "./assets/lib/calculateIntersect.js");


var stage = new createjs.Stage("myCanvas");
let boy = new createjs.Sprite(tokyoBoy);
let girl = new createjs.Sprite(tokyoGirl);
let monster = new createjs.Sprite(monsterman);




var PLATFORM_IMAGE = './assets/sprites/bronze_tile_walkway.png'


var STAIRCASE_IMAGE = './assets/sprites/staircase.png';

const fireball1 = new createjs.Sprite(fireball);
const fireball2 = new createjs.Sprite(fireball);
window.fireball1 = fireball1;
window.fireball2 = fireball2;


fireball2.nebula = 0;
fireball2.hasPower = false;
const platforms = [];
const staircases = [];



addPlatform(10, 240);
addPlatform(10, 340);
addPlatform(140, 340);
addPlatform(380, 340);
addPlatform(640, 340);
// addPlatform(410, 280);
// addPlatform(640, 340);
addPlatform(770, 340);
// addPlatform(380, 340);

addPlatform(70, 440);
addPlatform(200, 440);
addPlatform(330, 440);
addPlatform(460, 440);
addPlatform(590, 440);
addPlatform(720, 440);

addStairCase(240, 368);

var movingPlatform1 = addPlatform(410, 280);

window.movingPlatform1 = movingPlatform1;

 function addPlatform(x, y, xx, yy){
  var platform = new createjs.Bitmap(PLATFORM_IMAGE);
  platform.x = x;
  platform.y = y - 27;
  platform.changed = false;
  platform.scale = 0.2;
  platform.snapToPixel = true;
  platforms.push(platform);
  platform.setBounds(x + 57, y, 85, 40);
  stage.addChild(platform);
  window.platform = platform;
  return platform;
}
 function addStairCase(x, y, xx, yy){
   var staircase = new createjs.Bitmap(STAIRCASE_IMAGE);
   staircase.scale = 0.2;
   staircase.x = x;
   staircase.y = y;
  // platform.snapToPixel = true;
  staircases.push(staircase);
  staircase.setBounds(x + 60, y + 20, 120, 85);
  stage.addChild(staircase);
  window.staircase = staircase;
};

function checkGravity(){
  var cc=0;
  var bounds, cbounds, addY;
  while ( !boy.collision && cc < platforms.length ) {
           cbounds = platforms[cc].getBounds();
           bounds = boy.getBounds();
           addY = boy.velocity.y;
          boy.collision = calculateIntersection(bounds, cbounds);
          if(boy.collision){
            boy.collisionY = cbounds.y;
          }
          // if(!collision && calculateIntersect)
          if (( bounds.y < cbounds.y && bounds.y + addY > cbounds.y ) || ( bounds.y > cbounds.y && bounds.y + addY < cbounds.y )){
            boy.collision = true;
            boy.collisionY = cbounds.y;
          }


          cc++;
          }
         if(boy.collision && (boy.collisionY < boy.y)) {
          boy.velocity.y = 0;
          boy.y = boy.collisionY;
          boy.onGround = true;
        }

          boy.collisionY = null;
          if(!boy.staircase){

            boy.velocity.y += 5;
            boy.y += boy.velocity.y;

          }
}

function checkStairCase(){
  var cc=0;
  var bounds, cbounds, addY;
  boy.staircase = false;
  while (!boy.staircase && cc < staircases.length) {
           cbounds = staircases[cc].getBounds();
           bounds = boy.getBounds();

          boy.staircase = calculateIntersection(bounds, cbounds);
          cc++;
        }
}
// platform1.setBounds(0, 340, 540, 30);

boy.reset = function() {
  boy.x = 100;
  boy.y = 326;
  boy.velocity = {x:0,y:10};
  boy.vX = 0;
  boy.vY = 0;
  boy.vvY = 0;
  boy.vvX = 0;
  boy.onGround = true;
  boy.left = false;
  boy.right = false;
  boy.up = false;
  boy.down = false;
  boy.regX = 24;
  boy.collision = null;
  boy.onGround = false;
  boy.onStaircase = false;
  boy.hasFireball = false;
  boy.shootFireball = false;
};

//now we update the "tick"-method with:


//and this goes into the "reset"-method:
//getHeight() is a utility-function, but can also be
//replaced with a hardcoded-number
// this.y = getHeight() / 1.25;
// this.velocity.y = -15;

boy.reset();
stage.addChild(boy);
boy.gotoAndPlay("stand");

girl.reset = function() {
  girl.x = 760;
  girl.y = 414;
  girl.velocity = {x:0,y:10};
  girl.vX = 0;
  girl.vY = 0;
  girl.vvY = 0;
  girl.vvX = 0;
  girl.onGround = true;
  girl.left = false;
  girl.right = false;
  girl.up = false;
  girl.down = false;
  girl.regX = 24;
  girl.collision = null;
  girl.onGround = false;
  girl.onStaircase = false;

};

girl.reset();
stage.addChild(girl);
// girl.scaleX = -1;
girl.gotoAndPlay("standLeft");

monster.x = 590;
monster.y = 326;
monster.vX = 0;
monster.vY = 0;
monster.regX = 60;
monster.scaleX = -1;
monster.hasFireball = false;
monster.gotoAndPlay("dance");
setInterval(() => {monster.hasFireball = true; if(stage.contains(fireball1)){
  stage.removeChild(fireball1);
}}, 7000);
stage.addChild(monster);

window.boy = boy;
window.girl = girl;
window.monster = monster;

// var text = new createjs.Text("...life passes you by, like the clouds in the sky...", "18px Arial", "white");
//     text.x = 200;
//     text.y = 200;
//     text.textBaseline = "alphabetic";
//     stage.addChild(text);


createjs.Ticker.setFPS(20);
createjs.Ticker.addEventListener("tick", handleTick);

document.addEventListener("keypress", (e) => {
  if(e.key === "z" && boy.onGround){

    boy.y = boy.y - 50;
    boy.velocity.y = -15;
    boy.onGround = false;
  }
  if(e.key === "x" && !e.shiftKey && boy.shootFireball && boy.hasFireball){
    if(boy.right || boy.currentFrame === 1){
      fireball2.rightShoot = true;
    } else{
        fireball2.leftShoot = true;
    }
    fireball2.shoot = true;
    boy.shootFireball = false;
    boy.hasFireball = false;
  }

});

document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowRight" && !e.shiftKey && (boy.collision || boy.staircase)){
    boy.right = true;
    boy.gotoAndPlay("walkRight");
  }
  if(e.key === "ArrowLeft" && !e.shiftKey && (boy.collision || boy.staircase)){
    boy.left = true;
    boy.gotoAndPlay("walkLeft");
  }
  if(e.key === "ArrowDown" && !e.shiftKey && boy.staircase){
    boy.down = true;
    boy.gotoAndPlay("walkDown");
  }
  if(e.key === "ArrowUp" && !e.shiftKey && boy.staircase){
    boy.up = true;
    boy.gotoAndPlay("walkUp");
  }
  if(e.key === "ArrowRight" && e.shiftKey && ((girl.x < 470 && girl.y === 342) || (girl.x < 770 && girl.y === 414))){
    girl.vX += 10;
    girl.right = true;
    girl.gotoAndPlay("walkRight");
  }
  if(e.key === "ArrowLeft" && e.shiftKey && ((girl.x > -1 && girl.y === 342) || (girl.x > 330 && girl.y === 414))){
    girl.vX -= 10;
    girl.left = true;
    girl.gotoAndPlay("walkLeft");
  }
  if(e.key === "ArrowDown" && e.shiftKey && girl.x >= 360 && girl.x <= 400 && girl.y >= 342 && girl.y < 414){
    girl.vY += 6;
    girl.down = true;
    girl.gotoAndPlay("walkDown");
  }
  if(e.key === "ArrowUp" && e.shiftKey && girl.x >= 360 && girl.x <= 400 && girl.y > 342 && girl.y <= 414){
    girl.vY -= 6;
    girl.up = true;
    girl.gotoAndPlay("walkUp");
  }
  if(e.key === " " && !e.shiftKey && fireball2.nebula !== 2 && !fireball2.shoot){

    fireball2.nebula = 1;
    boy.hasFireball = false;
  }


});

// document.addEventListener("keypress", (e) =>{
//   if(e.keycode === 32 && (boy.x >= 330 || boy.x < 340) && boy.y === 425){
//     var text = new createjs.Text("Hello World", "40px Arial", "red");
//     text.x = 200;
//     text.y = 200;
//     text.textBaseline = "alphabetic";
//     stage.addChild(text);
//   }
// });

document.addEventListener("keyup", (e) => {

  if(e.key === "ArrowRight" && boy.right){
    boy.gotoAndPlay("stand");
    boy.right = false;
  }
  if(e.key === "ArrowRight" && girl.right){
    girl.gotoAndPlay("stand");
    girl.right = false;
  }

  if(e.key === "ArrowLeft" && boy.left){
    boy.gotoAndPlay("standLeft");
    boy.left = false;
  }
  if(e.key === "ArrowLeft" && girl.left){
    girl.gotoAndPlay("standLeft");
    girl.left = false;
  }

  if(e.key === "ArrowUp" && boy.up){
    boy.gotoAndPlay("standUp");
    boy.up = false;
  }
  if(e.key === "ArrowUp" && girl.up){
    girl.gotoAndPlay("standUp");
    girl.up = false;
  }

  if(e.key === "ArrowDown" && boy.down){
    boy.gotoAndPlay("standDown");
    boy.down = false;
  }
  if(e.key === "ArrowDown" && girl.down){
    girl.gotoAndPlay("standDown");
    girl.down = false;
  }
  if(e.key === " " && !e.shiftKey){
    if(fireball2.nebula === 2 && boy.hasFireball){
      boy.shootFireball = true;

    }
    else if(fireball2.nebula === 2){
      fireball2.nebula = 0;
      fireball2.hasPower = false;
      stage.removeChild(fireball2);
      boy.hasFireball = false;
    }

    }
});

function changeBoy(){
  boy.setBounds(boy.x, boy.y, 48 ,48);
  boy.collision = null;


  if(boy.right === true){
    boy.vX += 10;
  }
  if(boy.left === true){
    boy.vX -= 10;
  }
  if(boy.down === true){
    boy.vY += 6;
  }
  if(boy.up === true){
    boy.vY -= 6;
  }
  if(boy.y > window.innerHeight){
    boy.reset();
  }

  if(boy.vX !== 0){
    boy.x += boy.vX;
  }
  if(boy.vY !== 0){
    boy.y += boy.vY;
  }


  boy.vX = 0;
  boy.vY = 0;
}

function changeBoysFireBall(){
  fireball2.setBounds(fireball2.x, fireball2.y, 70, 70);
  fireball2.x -= fireball2.xbound;
  fireball2.y -= fireball2.ybound;

  if(fireball2.nebula === 0){
    fireball2.gotoAndPlay("invisible");
    fireball2.x = 0;
    fireball2.y = 0;
  }
  if(fireball2.nebula === 1){
    fireball2.gotoAndPlay("nebula");
    fireball2.y = boy.y;
    if(boy.currentFrame === 3 || boy.currentFrame === 4 || boy.currentFrame === 5){
      fireball2.x = boy.x - 60;
    } else{
      fireball2.x = boy.x;
    }
    stage.addChild(fireball2);
    fireball2.xbound = 0;
    fireball2.ybound = 0;
    fireball2.nebula = 2;


  }

  if(fireball2.shoot){
    if(fireball2.rightShoot){
      fireball2.x += 20;
    } else{
      fireball2.x -= 20;

    }
    boy.hasFireball = false;
    fireball2.hasPower = false;
    fireball2.nebula = 3;
    fireball2.boundx = 0;
    fireball2.boundy = 0;
    fireball2.setBounds(fireball2.x, fireball2.y, 50, 50);
    if(fireball2.x > window.innerWidth + 200 || fireball2.x < -200){
      fireball2.nebula = 0;
      fireball2.shoot = false;
      fireball2.rightShoot = false;
      fireball2.leftShoot = false;
    }
  }

  else if(boy.currentFrame === 3 || boy.currentFrame === 4 || boy.currentFrame === 5 && fireball2.nebula === 2){
    setdirection(fireball2, boy.x - 65, boy.y);
  }
  else{
    setdirection(fireball2, boy.x, boy.y);
  }




    if(calculateIntersection(fireball1.getBounds(), fireball2.getBounds())){
      boy.hasFireball = true;
      fireball2.hasPower = true;
      fireball2.gotoAndPlay("conjure");
      resetFireball1();
    }
}
function resetFireball1(){
  fireball1.gotoAndPlay("invisible");
  fireball1.x = 1000;
  fireball1.y = 1000;
  fireball1.setBounds(fireball1.x + 60, fireball1.y - 20, 48 ,48);
}
function changeMonstersFireBall(){
  if(monster.hasFireball && !boy.hasFireball){
    fireball1.x = 570;
    fireball1.y = 300;
    stage.addChild(fireball1);
    fireball1.xbound = null;
    fireball1.ybound = null;
    fireball1.gotoAndPlay("conjure");
    monster.gotoAndPlay("blast");
    monster.hasFireball = false;
  }

  if(fireball1.x === 570 && fireball1.currentFrame === 22){
    fireball1.x = 550;
    fireball1.y = 350;
    monster.gotoAndPlay("dance");
  }

  else if(fireball1.currentFrame === 22){
    setdirection(fireball1, boy.x - 32, boy.y - 5);
    fireball1.x -= fireball1.xbound;
    fireball1.y -= fireball1.ybound;
    fireball1.setBounds(fireball1.x + 60, fireball1.y - 20, 48 ,48);
  }

  if(calculateIntersection(boy.getBounds(), fireball1.getBounds())){
    console.log("hit");
    resetFireball1();
  }
}
function changeGirl(){
  if(girl.vX !== 0){
    girl.x += girl.vX;
  }
  if(girl.vY !== 0){
    girl.y += girl.vY;
  }
  girl.vX = 0;
  girl.vY = 0;
}

function changeMonster(){

  if(boy.x > monster.x){
    monster.scaleX = 1;
  }
  else{
    monster.scaleX = -1;
  }



  }

  function setdirection(obj, x, y){
    if(obj.x - x === 0){
      obj.xbound = 0;
    } else{

      obj.xbound = (obj.x - x)/(Math.sqrt(Math.abs(obj.x-x)));
    }
    if(obj.y - y === 0){
      obj.ybound = 0;
    } else{
      obj.ybound = (obj.y - y)/(Math.sqrt(Math.abs(obj.y-y)));

    }
  }


  function movePlatform(){
    if(movingPlatform1.y === 100){
      movingPlatform1.changed = false;
    }
    if(movingPlatform1.y === 260){
      movingPlatform1.changed = true;

    }

    if(movingPlatform1.changed){
      mover = -1;
    }
    else{
      mover = 1;
    }
    movingPlatform1.y += mover;
    movingPlatform1.setBounds(platform.x + 57, movingPlatform1.y + 27, 85, 50);
  }



function handleTick(){
  movePlatform();
  changeBoy();
  checkGravity();
  checkStairCase();
  changeGirl();
  changeMonster();
  changeMonstersFireBall();
  changeBoysFireBall();
  stage.update();
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map