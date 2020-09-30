

var bg,bgImg,running,player,fire,spike,cactusImg,checkpoint,finish,end,gameOver,restart,collided,title,play,life;
var ground,groundImg;
var invisibleGround;
var obstaclesGroup;
var home;
var play;

function preload(){
bgImg = loadImage("images/BG.png");
running = loadAnimation("images/run1.png","images/run2.png","images/run3.png","images/run4.png","images/run5.png");
fire = loadImage("images/fire.png");
spike = loadImage("images/spiketrap.png");
cactusImg = loadImage("images/cactus.png");
checkpoint =loadImage("images/checkpoint.png");
finish = loadImage("images/finishline.png");
end = loadImage("images/end.png");
gameOver = loadImage("images/gameOver.png");
groundImg = loadImage("images/ground.png");
restart = loadImage("images/restart.png");
collided = loadImage("images/collided.png");
title = loadImage("images/Title.png");
playImg = loadImage("images/playButton.png");
life = loadImage("images/life.png");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  image(title,displayWidth/2,displayHeight/2);

  home = createSprite(displayWidth/2,displayHeight/2);
  home.addImage("title",title);

  play = createSprite(displayWidth/2,displayHeight/2+50);
  play.addImage("play",playImg);

  ground = createSprite(width/2, height/2+300, width, 10);
  ground.x = ground.width /2;
  ground.velocityX = -6;
  ground.addImage("groundImg",groundImg);
  ground.scale = 2;
  console.log(ground.width);


  player = createSprite(200,height/2+200,10,50);
  player.addAnimation("running",running);
  player.scale = 4;

  

  invisibleGround = createSprite(width/2,height/2+280,width,5);
  invisibleGround.visible = false;
  
  obstaclesGroup = new Group();

}

function draw() {
  background(bgImg); 
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  if(keyDown("space") && player.y>=height/2+200){
    player.velocityY = -10;
  }


  player.velocityY = player.velocityY+0.3;

  console.log(player.y);

  player.collide(invisibleGround);

  
  spawnObstacles();

  drawSprites();

}
function spawnObstacles() {
if(frameCount % 120 === 0){
  var cactus = createSprite(width,height/2+210,10,40);
  cactus.velocityX = -(6);

  var rand = Math.round(random(1,2));
  switch(rand){
    case 1: cactus.addImage("cactus",cactusImg);
            break;
    case 2: cactus.addImage("spike",spike);
            break;
    default: break;
  }
  cactus.scale = 0.5;
  cactus.lifetime = width/6;

  obstaclesGroup.add(cactus);

}

}