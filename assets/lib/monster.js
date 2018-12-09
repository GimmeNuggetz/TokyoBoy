

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
