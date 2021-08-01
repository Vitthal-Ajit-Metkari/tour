var player;
var playerRun;
var vRoad, vRoadImage;
var boatImage,seaImage;
var bullImage,snakeImage,mummyImage,barrierImage;
function preload(){
  //playerRun=loadAnimation("Player/Player1.png","Player/Player2.png","Player/Player3.png","Player/Player4.png","Player/Player5.png","Player/Player6.png","Player/Player7.png","Player/Player8.png");
  //vRoadImage=loadImage("bg/villageRd2.png");
 
  bullImage=loadImage("obstacle/cactus.png");
  boatImage=loadImage("bg/boat.png");
}



function setup() {
  createCanvas(1200,600);
  //player=createSprite(600,150, 50, 100);
  //player.addAnimation("player_running",playerRun);
  

  bull=createSprite(500,290, 50, 100);
  bull.addImage(bullImage);
  //vRoad=createSprite(600,300,1200,80);
 // vRoad.addImage(vRoadImage);
  //vRoad.Y = vRoad.hieght/500;
  //vRoad.velocityY = -2;
  //if (vRoad.y < 0){
   // vRoad.y = vRoad.hieght/2;
 // }
// seaImage.Y = seaImage.hieght/2;
 // seaImage.velocityY = -2;
  //if (seaImage.y < 0){
    //seaImage.y = seaImage.hieght/2;
  //}
}

function draw() {
  background();  
  drawSprites();

  

  seaImage.depth = boatImage.depth;
  boatImage.depth = boatImage.depth + 1;
 // vRoad.depth = player.depth;
  //player.depth = player.depth + 1;

  
} 