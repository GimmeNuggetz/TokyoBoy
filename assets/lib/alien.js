

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
