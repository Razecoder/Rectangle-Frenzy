var fixedRect , movingRect

function setup() {
createCanvas(800,400);

fixedRect = createSprite(200, 200, 50, 50);
fixedRect.shapeColor = 'blue';
fixedRect.debug = true;
movingRect = createSprite(400,200,30,50);
movingRect.shapeColor = 'blue';
movingRect.debug = true;



}

function draw() {
background(0);  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)

{
fixedRect.shapeColor = 'green';
movingRect.shapeColor = 'green';
}
else {
movingRect.shapeColor = 'blue';
fixedRect.shapeColor = 'blue';
}
drawSprites();
}