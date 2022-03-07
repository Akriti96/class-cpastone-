const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var myground
var backgroundImage
var basket
var ball
var slingshot

function preload(){
 backgroundImage=loadImage("background.png")
 basket=loadImage("basket.png")
}


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  myground= new Ground(450,390,900,20)
  ball= new Ball(50,200,60)


  slingshot= new Rope(ball.body,{x:100,y:100})

 
  
 

  
	

  

}
function draw() {
  background(backgroundImage); 
  Engine.run(engine);

  image(basket,400,200,200,200)
  myground.display()
  ball.display()
  slingshot.display()
}

function mouseDragged(){
  // Matter.Body.setPosition(body, position)
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
 slingshot.fly()
}
