
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var solo;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	solo = Bodies.rectangle(400, 725, 800, 50, { isStatic: true })
	World.add(world, solo)
	var quadrado_op = {
		restitution: 0.5,
		frictionAir: 0.3
	}
	var bola_op = {
		restitution: 0.01,
		frictionAir: 0.8
	}
	var rect_op = {
		restitution: 1,
		frictionAir: 0
	}
	quadrado = Bodies.rectangle(200, 0, 50, 50, quadrado_op)
	World.add(world, quadrado)
	ret = Bodies.rectangle(400, 0, 100, 50, rect_op)
	World.add(world, ret)
	bola = Bodies.circle(600, 0, 50, bola_op)
	World.add(world, bola)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS)
	background("deeppink");
	fill("navy")
	rect(quadrado.position.x, quadrado.position.y, 50, 50)
	fill("greenyellow")
	rect(ret.position.x, ret.position.y, 100, 50)
	fill("purple")
	circle(bola.position.x, bola.position.y, 50)
	drawSprites();

}



