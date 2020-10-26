const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var groundOptions ={
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,10,groundOptions);
World.add(world,ground);

  var ballOptions ={
    restitution: 1, 
    friction: 1
  }
  ball = Bodies.circle(200,200,20,ballOptions);
  World.add(world,ball);
}

function draw(){
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}
