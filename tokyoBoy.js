
const tokyoBoy = require('./assets/lib/boy');
const tokyoGirl = require('./assets/lib/girl');
const monsterman = require('./assets/lib/monster');
const fireball = require('./assets/lib/fireball');
const calculateIntersection = require('./assets/lib/calculateIntersect');


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
