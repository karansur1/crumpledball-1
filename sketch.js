
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;

	
	ground = Bodies.rectangle(width/2, 650, width, 30 , {isStatic:true} );
	 World.add(world, ground);
	 

	 bottom= new Box (1000,625,200,20);
	 left= new Box(900,550,20,200);
	right= new Box(1100,550,20,200);

	paper= new Paper(200,500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 

  bottom.display();
  left.display();
  right.display();
paper.display();
  

  fill("black")

  rect(ground.position.x,ground.position.y,1600,30)
  
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
    
  }
}



