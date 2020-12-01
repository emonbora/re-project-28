
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground1
var tree1
var stone1
var launcher1
function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new ground(width/2,600,width,20)
    stone1 = new stone(235,420,30);
    tree1 = new tree(1050,580);
    launcher1 = new Launcher(stone1.body,{x:235,y:420})
    
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  ground1.display()
  stone1.display()
  tree1.display()
  drawSprites();
 
}



