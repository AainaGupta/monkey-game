
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 bananaImage = loadImage("banana.png")
  stoneImage = loadImage("obstacle.png")
}



function setup() {
  createCanvas(500,500)
  monkey=createSprite(80,315)
monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2
    
  ground=createSprite(500,370,1000,10)
  ground.velocityX=-4
 
}


function draw() {
  
  console.log(frameRate())
  console.log(frameCount)
  background("white")
  stroke("black")
  textSize("20")
  fill("black")
 survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime,100,50)
  if(ground.x<0){
    ground.x=ground.width/2
  }
  monkey.collide(ground)
  if(keyDown("space")&&monkey.y>300){
    monkey.velocityY=-17 
  }
  monkey.velocityY = monkey.velocityY + 0.8
  food();
  obstacles();
drawSprites();
  
}
function food(){
  if(frameCount%80===0){
banana=createSprite(500,Math.round(random(100,170)))
    banana.addImage(bananaImage)
    banana.velocityX=-5
    banana.lifetime=100
    banana.scale=0.14
  }
}
  
function obstacles(){
  if(frameCount%300===0){
    stone=createSprite(500,310)
    stone.addImage(stoneImage)
    stone.velocityX=-4
    stone.lifetime=125
    stone.scale=0.3
  }
}




