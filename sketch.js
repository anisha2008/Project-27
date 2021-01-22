
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var options={
	isStatic : true
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  c1=new Anisha(250,470,50)
	  c2=new Anisha(300,470,50)
	  c3=new Anisha(350,470,50)
	  c4=new Anisha(400,470,50)
	  c5=new Anisha(450,470,50)

	  p1=Bodies.rectangle(360,150,300,50,options)
	 World.add(world,p1)

	  chain1=new Chain(c1.body,p1,-100,0)
	  chain2=new Chain(c2.body,p1,-50,0)
	  chain3=new Chain(c3.body,p1,0,0)
	  chain4=new Chain(c4.body,p1,50,0)
	  chain5=new Chain(c5.body,p1,100,0)
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('aqua');

  rect(p1.position.x,p1.position.y,300,50)
  fill("green")
  c1.display()
  fill("pink")
  c2.display()
  c3.display()
  c4.display()
  c5.display()

  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()

  Ballmoving()

}
  
   function Ballmoving(){
  if(keyWentDown("up")){
	Matter.Body.applyForce(c1.body,c1.body.position,{x:-800,y:0})
	console.log("ANISHA")
}
}




