var trex, ground;
var trex_animation, groundImage;

function preload(){
  //load sound, image and animations in a variable
  groundImage = loadImage("ground2.png");

  trex_animation = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}

function setup(){
  createCanvas(600,200);
  
  trex = createSprite(50,180,20,40);
  trex.addAnimation("running", trex_animation);
  trex.scale = 0.5;


  ground = createSprite(300,190,600,20);
  ground.velocityX = -10;
  ground.x = ground.width/2;
  ground.addImage(groundImage);
}


function draw(){
  //set background color 
  background("white");
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
   
  if(keyDown("space")){
    trex.velocityY=-10

  }
  trex.velocityY = trex.velocityY+0.8
  trex.collide(ground)

  drawSprites();
}