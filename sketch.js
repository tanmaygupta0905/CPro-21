var astronaut;

function preload(){
  bg=loadImage("iss.png");
  sleep= loadAnimation("sleep.png");
  brush= loadAnimation("brush.png");
  gym=   loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat=   loadAnimation("eat1.png","eat2.png");
  drink= loadAnimation("drink1.png","drink2.png");
  move=  loadAnimation("move.png","move1.png");
}



function setup() {
  createCanvas(400, 400);

  astronaut=createSprite(300,230);
  astronaut.addAnimation(sleep);
  astronaut.scale=0.5;

}

function draw() {
  background(bg);
  text("Instructions",10,10);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation(brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation(gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation(eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation(drink);
    astronaut.changeAnimation("drinking");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  } 

  if(keyDown("M")){
    astronaut.addAnimation(move);
    astronaut.changeAnimation("moving");
    astronaut.y=350;
    astronaut.velocityX=2;
    astronaut.velocityY=2;
  }

  drawSprites();     
}