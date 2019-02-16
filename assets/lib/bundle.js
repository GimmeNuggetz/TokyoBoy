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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pizzaface.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/lib/alien.js":
/*!*****************************!*\
  !*** ./assets/lib/alien.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



const alien = new createjs.SpriteSheet({
  "images": ["assets/sprites/Alien.png"],
  "frames": [
        [60, 355, 120, 125, 0, 0 , 30],
        [60, 240, 120, 110, 0, 0, 20],
        [190, 240, 120, 110, 0, 0, 20],
        [290, 240, 120, 110, 0, 0, 15],
        [400, 240, 140, 110, 0, 0, 20],
        [550, 240, 150, 110, 0, 0, 25],
        [710, 240, 130, 110, 0, 0, 25],
        [810, 240, 130, 110, 0, 10, 25],
        [940, 240, 130, 110, 0, 5, 20],
        [1080, 240, 130, 110, 0, -15, 25],
        [360, 875, 120, 80],
        [475, 875, 120, 80],
        [595, 875, 135, 80],
        [740, 875, 135, 80],

],
  "animations": {
    "attack": {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      speed: 0.5
    },
    "stand": {
      frames: [0, 0, 1, 1, 8, 8, 9, 9],
      speed: 0.5
    },
    "crawl": {
      frames: [10, 10, 10, 11, 11, 12, 13, 13, 13, 13, 12, 12, 11, 11],

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
module.exports = alien;


/***/ }),

/***/ "./assets/lib/antigravity.js":
/*!***********************************!*\
  !*** ./assets/lib/antigravity.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



const antigravity = new createjs.SpriteSheet({
  "images": ["assets/sprites/antigravity.png"],
  "frames": [

        // [50, 50, 20, 20],
        [40, 20, 50, 50, 0, 40, -20],
        [13, 20, 50, 50, 0, 16, -20],
        [127, 20, 50, 50, 0, 30, -20],
        [201, 20, 50, 50, 0, 20, -20],
        [260, 20, 50, 50, 0, 25, -20],
        [324, 20, 50, 40, 0, 25, -20],
        [388, 20, 50, 40, 0, 25, -20],
        [452, 10, 50, 40, 0, 25, -10],

        [5, 62, 60, 60, 0, 25, 2],
        [69, 62, 60, 60, 0, 25, 2],
        [133, 62, 60, 60, 0, 25, 2],
        [197, 62, 60, 60, 0, 25, 2],
        [261, 62, 60, 60, 0, 25, 2],
        [325, 62, 60, 70, 0, 25, 2],
        [389, 62, 60, 70, 0, 25, 2],
        // [452, 62, 70, 70, 0, 25, 2],




],
  "animations": {
    "invisible": 0,
    "fly": [1, 14],
  }
});
module.exports = antigravity;


/***/ }),

/***/ "./assets/lib/boy.js":
/*!***************************!*\
  !*** ./assets/lib/boy.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const tokyoBoy = new createjs.SpriteSheet({
  "images": ["assets/sprites/Boy.png"],
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
    "walkDown": [9, 11],
    "spin":{
      frames: [1, 4, 7, 10],
      next: "stand"
    }
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
  r1.cy = rect1.y - y + (r1.hh = (rect1.height/2));
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

/***/ "./assets/lib/crystals.js":
/*!********************************!*\
  !*** ./assets/lib/crystals.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



const crystal = new createjs.SpriteSheet({
  "images": ["assets/sprites/Crystals.png"],
  "frames": [

    [0, 120, 25, 35],
    [25, 120, 25, 35],
    [55, 120, 25, 35],
    [80, 120, 25, 35],
    [110, 120, 25, 35],

    [0, 40, 25, 35],
    [25, 40, 25, 35],
    [55, 40, 25, 35],
    [80, 40, 25, 35],
    [110, 40, 25, 35],

    [0, 200, 25, 35],
    [25, 200, 25, 35],
    [55, 200, 25, 35],
    [80, 200, 25, 35],
    [110, 200, 25, 35]

],
  "animations": {
    "orange": {
      frames: [0, 0, 0, 0, 0 , 0, 1, 2, 3, 4],
      speed: 0.5
    },
    "purple": {
      frames: [5, 5, 5, 5, 5, 5, 6, 7, 8, 9],
      speed: 0.5
    },
    "green": {
      frames: [10, 10, 10, 10, 10, 10, 11, 12, 13, 14],
      speed: 0.5
    }

}});
module.exports = crystal;


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
        [0, 160, 130, 155],
        [120, 160, 105, 155],
        [225, 160, 125, 155],
        [380, 160, 125, 155],
        [520, 160, 135, 155],
        [660, 160, 160, 155, 0, 0, -5]
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

    },
    "defeat": 15,
    "hit":{
      frames: [10, 10, 10, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0],
      next: "dance"
    },
    "defeated": {
      frames: [10, 11, 12, 13, 14, 15],
      next: "defeat",
      speed: 0.1
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

/***/ "./pizzaface.js":
/*!**********************!*\
  !*** ./pizzaface.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const tokyoGirl = __webpack_require__(/*! ./assets/lib/girl */ "./assets/lib/girl.js");
const tokyoBoy = __webpack_require__(/*! ./assets/lib/boy */ "./assets/lib/boy.js");
const monsterman = __webpack_require__(/*! ./assets/lib/monster */ "./assets/lib/monster.js");
const alien1 = __webpack_require__(/*! ./assets/lib/alien */ "./assets/lib/alien.js");
const fireball = __webpack_require__(/*! ./assets/lib/fireball */ "./assets/lib/fireball.js");
const antigrav = __webpack_require__(/*! ./assets/lib/antigravity */ "./assets/lib/antigravity.js");
const crystal = __webpack_require__(/*! ./assets/lib/crystals */ "./assets/lib/crystals.js");
const calculateIntersection = __webpack_require__(/*! ./assets/lib/calculateIntersect */ "./assets/lib/calculateIntersect.js");
const jumpSound = new Audio('./assets/sounds/hopppp.wav');
const ouchSound = new Audio('./assets/sounds/ouch.wav');
const monsterdeath = new Audio('./assets/sounds/monster_death.wav');
const monsterhit = new Audio('./assets/sounds/monsterhit.wav');
const boydeath = new Audio('./assets/sounds/burp.wav');
const themeMusic = new Audio('./assets/sounds/theme.mp3');
const flySound = new Audio('./assets/sounds/synth_levitation.m4a');
const fireballLaunch = new Audio('./assets/sounds/fireball_launch.wav');
const counterLaunch = new Audio('./assets/sounds/counter_launch.wav');

fireballLaunch.volume = 0.5;
themeMusic.volume = 0.2;

const stage = new createjs.Stage("myCanvas");
const boy = new createjs.Sprite(tokyoBoy);
const girl = new createjs.Sprite(tokyoGirl);

const monster = new createjs.Sprite(monsterman);
const purpleCrystal = new createjs.Sprite(crystal);
const antigravity = new createjs.Sprite(antigrav);



const orangeCrystal = new createjs.Sprite(crystal);
const greenCrystal = new createjs.Sprite(crystal);


var PLATFORM_IMAGE = './assets/sprites/bronze_tile_walkway.png';


var STAIRCASE_IMAGE = './assets/sprites/staircase.png';

const fireball1 = new createjs.Sprite(fireball);
const fireball2 = new createjs.Sprite(fireball);
window.fireball1 = fireball1;
window.fireball2 = fireball2;

var platforms = [];
var movingPlatforms = [];
const staircases = [];
const aliens = [];
const crystals = [];
addAlien(60, 30, 0.5, 0);
addAlien(800, 250, -0.5, 2);
addAlien(760, 0, -0.5, 1);

addAlien(160, 520, 0.5, 0);
addAlien(260, 520, -0.5, 2);
addAlien(460, 520, -0.5, 1);
addAlien(660, 520, 0.5, 2);
addAlien(760, 520, -0.5, 1);
addAlien(860, 520, -0.5, 2);

addPlatform(10, 240);
addPlatform(10, 30);
addPlatform(450, 25);
addPlatform(690, 25);
addPlatform(640, 120);
addPlatform(510, 120);
addPlatform(720, 240);
var platform1 = addPlatform(10, 340);
addPlatform(140, 340);
addPlatform(380, 340);
var secretPlatform = addPlatform(840, 440);
addPlatform(770, 340);
addPlatform(70, 440);
addPlatform(200, 440);
addPlatform(330, 440);
addPlatform(460, 440);
addPlatform(590, 440);
addPlatform(720, 440);

addPlatform(70, 710);
addPlatform(200, 710);
addPlatform(330, 710);
addPlatform(460, 710);
addPlatform(590, 710);
addPlatform(720, 710);
addPlatform(850, 710);
addStairCase(240, 368);
addStairCase(550, 50);
addMovingPlatform(350, 250, 410, 410, 260, 100);
addMovingPlatform(150, 180, 100, 250);
// addMovingPlatform(0, 130, 0, 0, 140, 30);
crystals.push(purpleCrystal);
crystals.push(orangeCrystal);
crystals.push(greenCrystal);
stage.addChild(purpleCrystal);
stage.addChild(orangeCrystal);
stage.addChild(greenCrystal);

girl.reset = function() {
  girl.x = 760;
  girl.y = 420;
  girl.velocity = {x:0,y:10};
  girl.vX = 0;
  girl.vY = 0;
  girl.vvY = 0;
  girl.vvX = 0;
  girl.left = false;
  girl.right = false;
  girl.up = false;
  girl.down = false;
  girl.regX = 24;
  girl.collision = null;
  girl.onGround = false;
  girl.staircase = false;
  girl.released = false;
  girl.flyFactor = false;
};


monster.reset = function() {
  monster.x = 590;
  monster.y = 326;
  monster.setBounds(monster.x, monster.y, 80, 130);
  monster.health = 1000;
  monster.alive = true;
  monster.vX = 0;
  monster.vY = 0;
  monster.regX = 60;
  monster.scaleX = -1;
  monster.hasFireball = false;
  monster.gotoAndPlay("dance");
  stage.addChild(monster);
};




boy.reset = function() {
  boy.x = 100;
  boy.y = 300;
  boy.velocity = {x:0,y:10};
  boy.vX = 0;
  boy.vY = 0;
  boy.vvY = 0;
  boy.vvX = 0;
  boy.health = 100;
  boy.left = false;
  boy.right = false;
  boy.up = false;
  boy.down = false;
  boy.regX = 24;
  boy.collision = null;
  boy.onGround = false;
  boy.staircase = false;
  boy.hasFireball = false;
  boy.shootFireball = false;
  fireball2.shot = false;
  fireball2.nebula = 0;
  fireball2.shoot = false;
  fireball2.rightShoot = false;
  fireball2.leftShoot = false;
  fireball2.hasPower = false;
};




let monsterId;
let currenttime;
document.addEventListener("click", (event) => {
  overlay.classList.add("closed");
  gametitle.classList.add("closed");
  resetGame();
  monsterId = setInterval(() => {monster.hasFireball = true; if(stage.contains(fireball1)){
    stage.removeChild(fireball1);
  }}, 7000);
  themeMusic.play();
  setInterval(()=> {themeMusic.play();}, 28000);
  stage.addChild(antigravity);
  createjs.Ticker.setFPS(20);
  createjs.Ticker.addEventListener("tick", handleTick);
  // createjs.getEventTime(true);
});


document.addEventListener("keypress", (e) => {
  if(e.key === "j" && boy.onGround){
    jumpSound.play();
    boy.y = boy.y - 40;
    boy.velocity.y = -8;
    boy.onGround = false;
  }
  if(e.key === "J" && girl.onGround){
    jumpSound.play();
    girl.y = girl.y - 40;
    girl.velocity.y = -6;
    girl.onGround = false;
  }
  if(e.key === " " && boy.shootFireball && boy.hasFireball){
    if(boy.right || boy.currentFrame === 1){
      fireball2.rightShoot = true;
    } else{
        fireball2.leftShoot = true;
    }
    counterLaunch.play();
    fireball2.shoot = true;
    boy.shootFireball = false;
    boy.hasFireball = false;
  }

});

document.addEventListener("keydown", (e) => {
  if(e.key === "d" && (boy.collision || boy.staircase)){
    boy.right = true;
    boy.gotoAndPlay("walkRight");
  }
  if(e.key === "a" && (boy.collision || boy.staircase)){
    boy.left = true;
    boy.gotoAndPlay("walkLeft");
  }
  if(e.key === "s" && boy.staircase){
    boy.down = true;
    boy.gotoAndPlay("walkDown");
  }
  if(e.key === "w" && boy.staircase){
    boy.up = true;
    boy.gotoAndPlay("walkUp");
  }
  if(e.key === "D" && girl.flyFactor){
    girl.right = true;
    girl.gotoAndPlay("stand");
  }
  if(e.key === "D" && !girl.flyFactor && (girl.collision || girl.staircase)){
    girl.right = true;
    girl.gotoAndPlay("walkRight");
  }
  if(e.key === "A" && girl.flyFactor){
    girl.left = true;
    girl.gotoAndPlay("standLeft");
  }
  if(e.key === "A" && !girl.flyFactor && (girl.collision || girl.staircase)){
    girl.left = true;
    girl.gotoAndPlay("walkLeft");
  }
  if(e.key === "S" && girl.flyFactor){
    girl.down = true;

  }
  if(e.key === "S" && !girl.flyFactor && girl.staircase){
    girl.down = true;
    girl.gotoAndPlay("walkDown");
  }
  if(e.key === "W" && !girl.flyFactor && girl.staircase){
    girl.up = true;
    girl.gotoAndPlay("walkUp");
  }
  if(e.key === "W" && girl.flyFactor){
    girl.up = true;
  }

  if(e.key === "k" && !e.shiftKey && fireball2.nebula !== 2 && !fireball2.shoot){

    fireball2.nebula = 1;
    boy.hasFireball = false;
  }
  if(e.key === "K" && girl.onGround){
    girl.force = true;

  }
});

document.addEventListener("keyup", (e) => {
  if(e.key === "d" && boy.right){
    boy.gotoAndPlay("stand");
    boy.right = false;
  }
  if(e.key === "D" && girl.right){
    girl.gotoAndPlay("stand");
    girl.right = false;
  }

  if(e.key === "a" && boy.left){
    boy.gotoAndPlay("standLeft");
    boy.left = false;
  }
  if(e.key === "A" && girl.left){
    girl.gotoAndPlay("standLeft");
    girl.left = false;
  }

  if(e.key === "w" && boy.up){
    boy.gotoAndPlay("standUp");
    boy.up = false;
  }
  if(e.key === "W" && girl.up && !girl.flyFactor){
    girl.gotoAndPlay("standUp");
    girl.up = false;
  }
  if(e.key === "W" && girl.up && girl.flyFactor){
    girl.up = false;
  }

  if(e.key === "s" && boy.down){
    boy.gotoAndPlay("standDown");
    boy.down = false;
  }
  if(e.key === "S" && girl.down && girl.flyFactor){
    girl.gotoAndPlay("standDown");
    girl.down = false;
  }
  if(e.key === "S" && girl.down && !girl.flyFactor){
    girl.gotoAndPlay("standDown");
    girl.down = false;
  }
  if(e.key === "k" && !e.shiftKey){
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

    if(e.key === "K" && girl.flyFactor){
      girl.force = false;
      flySound.pause();
      antigravity.gotoAndPlay("invisible");
      girl.flyFactor = false;
    }
});




function changeAntigravity(){
  antigravity.x = girl.x;
  antigravity.y = girl.y;
}

function resetGame(){

  purpleCrystal.x = 550;
  purpleCrystal.y = 680;
  purpleCrystal.gotoAndPlay("purple");

  orangeCrystal.x = 800;
  orangeCrystal.y = 20;
  orangeCrystal.gotoAndPlay("orange");

  greenCrystal.x = 50;
  greenCrystal.y = 40;
  greenCrystal.gotoAndPlay("green");

  monster.crystals = 0;


  // addAlien(100, 190, 0.5, 1);

  // addMovingPlatform(200, 180);

  window.platform1 = platform1;
  window.boy = boy;
  window.girl = girl;
  window.monster = monster;

  girl.reset();
  stage.addChild(girl);
  // girl.scaleX = -1;
  girl.gotoAndPlay("standLeft");


  monster.reset();
  boy.reset();
  stage.addChild(boy);
  boy.gotoAndPlay("stand");
}


function gameTime(){

  for (var i = 0; i < crystals.length; i++) {
    let crystal = crystals[i];
    crystal.setBounds(crystal.x, crystal.y, 18, 48);
    if (calculateIntersection(boy.getBounds(), crystal.getBounds()) || calculateIntersection(girl.getBounds(), crystal.getBounds())) {
      monster.crystals += 1;
      console.log("hit");
      crystal.y = 1500;
    }

  }

  if(boy.health <= 0){
    resetGame();
    boydeath.play();

  }
  if(monster.health <= 0 && monster.alive === true){
    clearInterval(monsterId);
    monster.gotoAndPlay("defeated");
    monsterdeath.play();
    // girl.released = true;
    monster.setBounds(-1300, 1700);
    monster.alive = false;
  }
  if(!monster.alive && !girl.released){
    girl.released = true;
    secretPlatform.moveDown = 430;
    let idx = platforms.indexOf(secretPlatform);
    // let platform = platforms.splice(idx, 1)
    secretPlatform.moveUp = 600;
    secretPlatform.moveLeft = 0;
    secretPlatform.moveRight = 0;
    movingPlatforms.push(platforms[idx]);
  }
  if(monster.crystals === 3){


    overlay.classList.remove("closed");
    gametitle.classList.remove("closed");

  }
}

function addMovingPlatform(x, y, xx1, xx2, yy1, yy2){
  platform = addPlatform(x, y);
  platform.moveUp = yy1;
  platform.moveDown = yy2;
  platform.moveLeft = xx1;
  platform.moveRight = xx2;
  movingPlatforms.push(platform);
  return platform;

}

 function addPlatform(x, y, xx, yy){
  var platform = new createjs.Bitmap(PLATFORM_IMAGE);
  platform.x = x;
  platform.y = y - 27;
  platform.moverX = 0;
  platform.changed = false;
  platform.scale = 0.2;
  platform.snapToPixel = true;
  platforms.push(platform);
  platform.setBounds(x + 57, y-5, 85, 40);
  stage.addChild(platform);
  return platform;
}

 function addAlien(x, y, xx, yy){
   var alien = new createjs.Sprite(alien1);
  alien.x = x;
  alien.y = y;
  alien.scale = 0.5;
  alien.regX = 60;
  alien.scaleX = xx;
  alien.collision = null;
  alien.velocity = {x: 0, y: 10};
  alien.onGround = false;
  alien.staircase = false;
  if(yy === 1){
    alien.gotoAndPlay("attack");
  }
  else if(yy === 2){
    alien.gotoAndPlay("crawl");
  }
  else if( yy === 0){
    alien.gotoAndPlay("stand");
  }
  // alien.scaleX = xx;
  aliens.push(alien);
  alien.setBounds(x, y, 48, 48);
  stage.addChild(alien);
  window.alien = alien;
}



 function addStairCase(x, y, xx, yy){
   var staircase = new createjs.Bitmap(STAIRCASE_IMAGE);
   staircase.scale = 0.2;
   staircase.x = x;
   staircase.y = y;
  // platform.snapToPixel = true;
  staircases.push(staircase);
  staircase.setBounds(x + 65, y, 100, 90);
  stage.addChild(staircase);
  window.staircase = staircase;
}

function gravity(thing, flyFactor) {

  var kk = 0;
  if(!flyFactor){
    while (!thing.collision && kk < platforms.length) {
      cbounds = platforms[kk].getBounds();
      bounds = thing.getBounds();
      addY = thing.velocity.y;
      thing.collision = calculateIntersection(bounds, cbounds, 0, addY);
      if(thing.collision){
        thing.collisionY = cbounds.y;
        thing.platform = platforms[kk];
      }
      // if(!collision && calculateIntersect)
      if (!thing.collision && ( bounds.y < cbounds.y && bounds.y + addY > cbounds.y ) || ( bounds.y > cbounds.y && bounds.y + addY < cbounds.y )){
        thing.collision = true;
        thing.collisionY = cbounds.y;
        thing.platform = platforms[kk];
      }

      kk++;
    }
    if(thing.collision && (thing.collisionY < thing.y)) {
      thing.velocity.y = 0;
      thing.y = thing.collisionY;
      thing.onGround = true;
    }
    if(thing.collision && thing.platform.moverX){

      thing.x += thing.platform.moverX;

    }
    thing.collisionY = null;
    if(!thing.staircase){
      thing.velocity.y += 2;
      thing.y += thing.velocity.y;
    }

  }
}
function checkGravity(){

for (var i = 0; i < aliens.length; i++) {
  var kk = 0;
  let alien = aliens[i];
  gravity(alien, false);
}
  gravity(boy, false);
  gravity(girl, girl.flyFactor);
          // boy.collisionY = null;
}

function checkStairCase(thing){

  var cc=0;
  var bounds, cbounds, addY;
  thing.staircase = false;
  while (!thing.staircase && cc < staircases.length) {
           cbounds = staircases[cc].getBounds();
           bounds = thing.getBounds();

          thing.staircase = calculateIntersection(bounds, cbounds);
          cc++;
        }
}



function changeAliens(){
  for (var i = 0; i < aliens.length; i++) {
    let alien = aliens[i];
    alien.setBounds(alien.x, alien.y, 48 ,48);
    alien.collision = null;
  if(calculateIntersection(alien.getBounds(), fireball2.getBounds()) && fireball2.nebula === 3){

    stage.removeChild(alien);
    alien.x = 0;
    alien.y = -1000;

  }
  // if(calculateIntersection(boy.getBounds(), alien.getBounds()) || calculateIntersection(girl.getBounds(), alien.getBounds())){
  //
  // }


}
}


function changeBoy(){
  boy.setBounds(boy.x, boy.y, 48 ,48);
  boy.collision = null;

if(boy.immobile){
  setTimeout(()=> {
    boy.immobile = false;

    boy.gotoAndPlay("spin");
  }, 1000
);
}
else{

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
for (var i = 0; i < aliens.length; i++) {
  let alien = aliens[i];
  if(calculateIntersection(boy.getBounds(), alien.getBounds())){
    boy.reset();
    break;
  }
}


}


function changeBoysFireBall(){
  if(fireball2.shot){
    if(fireball2.rightShoot){
      fireball2.x += 40;
    } else{
      fireball2.x -= 40;
    }
    fireball2.setBounds(fireball2.x, fireball2.y, 40, 40);
  } else{
    fireball2.setBounds(fireball2.x, fireball2.y, 70, 70);
  }
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
    fireball2.shot = true;
    boy.hasFireball = false;
    fireball2.hasPower = false;
    fireball2.nebula = 3;
    fireball2.boundx = 0;
    fireball2.boundy = 0;
    if(fireball2.x > window.innerWidth + 200 || fireball2.x < -200){
      fireball2.shot = false;
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
    fireballLaunch.play();
  }

  else if(fireball1.currentFrame === 22){
    setdirection(fireball1, boy.x - 32, boy.y - 5);
    fireball1.x -= fireball1.xbound;
    fireball1.y -= fireball1.ybound;
    fireball1.setBounds(fireball1.x + 60, fireball1.y - 20, 48 ,48);
  }

  if(calculateIntersection(boy.getBounds(), fireball1.getBounds())){
    boy.health -= 40;
    boy.immobile = true;
    ouchSound.play();
    boy.gotoAndPlay("spin");

    resetFireball1();
  }

}

function changeGirl(){
  girl.setBounds(girl.x, girl.y, 48 ,48);
  girl.collision = null;

  if(girl.force && !girl.flyFactor && girl.onGround){
    antigravity.gotoAndPlay("fly");
    girl.flyFactor = true;
    flySound.play();

    setTimeout(()=> {
      girl.flyFactor = false;
      girl.onGround = false;
      girl.force = false;
      flySound.pause();
      antigravity.gotoAndPlay("invisible");
    }, 7000);
  }
  // else if(!girl.force) {
  //   antigravity.gotoAndPlay("invisible");
  //   girl.flyFactor = false;
  // }

  if(girl.right === true){
    girl.vX += 10;
  }
  if(girl.left === true){
    girl.vX -= 10;
  }
  if(girl.down === true){
    girl.vY += 6;
  }
  if(girl.up === true){
    girl.vY -= 6;
  }
  if(girl.y > window.innerHeight+1000){
    girl.reset();
  }

  if(girl.vX !== 0){
    girl.x += girl.vX;
  }
  if(girl.vY !== 0){
    girl.y += girl.vY;
  }
  girl.vX = 0;
  girl.vY = 0;
  for (var i = 0; i < aliens.length; i++) {
    let alien = aliens[i];
    if(calculateIntersection(girl.getBounds(), alien.getBounds())){
      girl.y = 2000;
      // resetGame();

    }
  }

}

function changeMonster(){

  if(boy.x > monster.x && monster.alive){
    monster.scaleX = 1;
  }
  else if(monster.alive){
    monster.scaleX = -1;
  }

  if(calculateIntersection(monster.getBounds(), boy.getBounds())){
    resetGame();
  }
  if(calculateIntersection(monster.getBounds(), girl.getBounds())){
    resetGame();
  }
  if(calculateIntersection(monster.getBounds(), fireball2.getBounds())){
    monster.hit = true;
    monster.health -= 300;
    if(monster.health > 0){
      monsterhit.play();
    }
    // console.log(`${monster.health}`)
    fireball2.x = 1200;
    monster.gotoAndPlay("hit");
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


  function movePlatforms(){
    for (var i = 0; i < movingPlatforms.length; i++) {
     let platform = movingPlatforms[i];

if(platform.moveDown !== platform.moveUp){

  if(platform.y === platform.moveDown){
    platform.changedY = false;
  }
  if(platform.y === platform.moveUp){
    platform.changedY = true;
  }
  if(platform.changedY){
    moverY = -1;
  }
  else{
    moverY = 1;
  }

  platform.y += moverY;

}

if(platform.moveLeft !== platform.moveRight){

  if(platform.x === platform.moveLeft){
    platform.changedX = false;
  }
  if(platform.x === platform.moveRight){
    platform.changedX = true;
  }
  // let platform.moverX;
  if(platform.changedX){
    platform.moverX = -1;
  }
  else{
    platform.moverX = 1;
  }
  platform.x += platform.moverX;
}




    platform.setBounds(platform.x + 57, platform.y + 27, 85, 50);
  }
}



function handleTick(){
  gameTime();
  movePlatforms();
  changeBoy();
  changeGirl();
  changeAliens();
  checkGravity();
  changeAntigravity();
  checkStairCase(boy);
  checkStairCase(girl);
  changeMonster();
  changeMonstersFireBall();
  changeBoysFireBall();
  stage.update();
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map