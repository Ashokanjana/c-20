var fixedRect,movingRect



function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="yellow"
  
  movingRect=createSprite(200, 200, 42, 96);
  movingRect.shapeColor="yellow"
}

function draw() {
  background("black");  

    movingRect.y=World.mouseY
  movingRect.x=World.mouseX

  movingRect.debug=true
  fixedRect.debug=true

  console.log(movingRect)
  console.log(fixedRect)
  console.log( movingRect-fixedRect) 
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && 
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
    movingRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
  }


  drawSprites();
}