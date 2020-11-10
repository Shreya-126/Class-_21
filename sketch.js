var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200,100,50,50);
  gameObject1.shapeColor="yellow";

  gameObject2 = createSprite(400,100,50,50);
  gameObject2.shapeColor="pink";

  gameObject3 = createSprite(600,100,50,50);
  gameObject3.shapeColor="blue";

  gameObject4 = createSprite(800,100,50,50);
  gameObject4.shapeColor="purple";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  drawSprites();
  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }


  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "red";
   gameObject1.shapeColor = "red";
  }
  else {
   gameObject1.shapeColor = "yellow";
  }


  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "red";
   gameObject2.shapeColor = "red";
  }
  else {
   gameObject2.shapeColor = "pink";
  }




  if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "red";
   gameObject3.shapeColor = "red";
  }
  else {
   gameObject3.shapeColor = "blue";
  }


  if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "red";
   gameObject4.shapeColor = "red";
  }
  else {
   gameObject4.shapeColor = "purple";
  }

  }



function isTouching(object1,object2){
  //case 1: object1 = movingRect    object 2 = fixedRect
  //case 2: object 1: movingRect    object2 = gameObject1
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
    }
  else{
   return false
  }



}