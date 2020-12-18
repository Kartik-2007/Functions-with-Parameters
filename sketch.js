var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(500,600,100,40);
  gameObject1.shapeColor="yellow"
  
  gameObject2 = createSprite(500,400,100,55);
  gameObject2.shapeColor="aqua"

  gameObject3 = createSprite(290,500,5,20)
  gameObject3.shapeColor="lime";

  gameObject4 = createSprite(650,200,10,65);
  gameObject4.shapeColor="orange"

  //movingRect velocityY
 // movingRect.velocityY = -5;
  //fixedRect velocityY
 // fixedRect.velocityY = +5;



   gameObject1.velocityY= 4;
   gameObject2.velocityY= -4;
}

function draw() {
  background("red");  

  bounceOff(gameObject1,gameObject2);
  
  drawSprites();
}

