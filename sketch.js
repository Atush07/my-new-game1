var weira,weiraImg;
zombie
var backgroundImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
backgroundImg = loadImage("background.jpg")
weiraImg = loadImage("weira.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	weira = createSprite(30,450,10,10);
	weira.addImage(weiraImg);
	weira.scale=0.32

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  weira.x = mouseX;
  weira.y = mouseY;
  drawSprites();

}



