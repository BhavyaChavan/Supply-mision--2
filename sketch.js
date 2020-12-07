var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,packageBody2,package2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
 
	
	engine = Engine.create();
	world = engine.world;

	leftBox=Bodies.rectangle(320,610,20,100,{isStatic:true})
	World.add(world,leftBox);
	
	rightBox=Bodies.rectangle(500,610,20,100,{isStatic:true})
    World.add(world,rightBox);

	baseBox=Bodies.rectangle(410,650,200,20,{isStatic:true})
	World.add(world,baseBox);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill('red')
  rect(leftBox.position.x,leftBox.position.y,20,100);
  rect(rightBox.position.x,rightBox.position.y,20,100);
  rect(baseBox.position.x,baseBox.position.y,200,20);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);
    
  }
}



