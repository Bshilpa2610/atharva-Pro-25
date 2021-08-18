
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var paper, dustbin;
var ground;

function preload(){
	//paper= loadImage("Images/Paper.png");
	//dustbin = loadImage("Images/Dustbingreen.png");

}

	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper(400,300,50);
	dustbin1= new Dustbin(500,510,20,200);
	dustbin2= new Dustbin(600,620,240,20);
	dustbin3 = new Dustbin(700,510,20,200);

	ground = new Ground(0,630,1200,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-85})
	}
}

