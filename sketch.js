const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var stick;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }



    ground = Bodies.rectangle(200,390,200,20,ground_options);
    
    World.add(world,ground);
var ball_options={
    restitution: 0.9,
}

    ball = Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);

    stick = Bodies.rectangle(300,200,20,50,stick_options);
    World.add(world,stick);

    var stick_options={
        restitution:0.5
    }

    console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);
    rectMode(CENTER);
    rect(stick.position.x,stick.position.y,20,50);
    
}
