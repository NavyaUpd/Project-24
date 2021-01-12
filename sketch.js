
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ball, ground, bottom, left, right;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper();
	bottom = new Dustbin(650, 650, 225, 20);
	left = new Dustbin(550, 600, 20, 100);
	right = new Dustbin(750, 600, 20, 100);
	ground = new Ground(400, 670, 800, 30);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball.display();
  ground.display();
  bottom.display();
  left.display();
  right.display();
  

  if(keyWentDown("UP_ARROW")){
	  Matter.Body.applyForce(ball.body, ball.body.position,{x:350, y:-350});
  }
}



