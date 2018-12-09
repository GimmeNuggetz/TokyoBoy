

var PLATFORM_IMAGE = './assets/sprites/bronze_tile_walkway.png';
export const stage = new createjs.Stage("myCanvas");
export const platforms = [];
export const addPlatform = (x, y, xx, yy) => {
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
};
