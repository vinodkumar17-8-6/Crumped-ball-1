
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper (200,300,50)

	rect1 = new Rect (510,610,20,100);	
	rect2 = new Rect (690,610,20,100);
	rect3 = new Rect (600,650,200,20);

	ground = new Ground (400,670,800,20);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode===UP_ARROW){

      Matter.Body.applyForce(paper.body,paper.body.position,{x : 200,y : -200})

	}

}

