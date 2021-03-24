
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bg
var back

function preload(){
  
  bg = loadImage("jungle.jpg");
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 
}



function setup() {
  createCanvas(600,600);
  
  back = createSprite(300,300);
  back.addImage(bg)
  back.velocityX = -2;
  
  monkey = createSprite(50,580);
  
monkey.addAnimation("running",monkey_running);
  
  monkey.scale=0.2;
  
  ground = createSprite(300,580,600,20);

  
  bananaGroup = createGroup();
  
  obstaclesGroup = createGroup();
}


function draw() {
background(bg);
  
  if(back.x<0){
    back.x = back.width/2
    
  }
  console.log(monkey.y);
  
  if(keyDown("space") && monkey.y >= 508) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  spawnBananas();
 
  spawnObstacle();
  
   if(bananaGroup.isTouching(monkey)){
        //gameState = END;
     bananaGroup.destroyEach();
     
    }
  /*if(obstaclesGroup.isTouching(player)){
    player.scale=0.2;
  }*/
  
  drawSprites();
 
   
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime: "+survivalTime,100,50);
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(200,400));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}

function spawnObstacle() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(600,555,40,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    obstaclesGroup.add(obstacle);
    switch(score){
  case 10: player.scale = 0.12;
            break;
    case 20: player.scale = 0.14;
             break;
    case 30: player.scale = 0.16;
              break;
    case 40: player.scale = 0.18;
               break;
               default: break;
}

  }
}

