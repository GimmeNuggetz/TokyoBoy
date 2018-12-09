

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
