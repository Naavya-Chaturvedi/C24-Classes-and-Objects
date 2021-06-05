//step1-name spacing/nickname
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,box;
var ground,ball;
var box1;

function setup() {
  createCanvas(1200,400);

  //step2
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  //step3
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,220);
  log2 = new Log(810,180,300,PI/2);

  box5 = new Box(810,160,70,70);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);

  bird = new Bird(100,100)

  //step6 - tweaking the values of the properties
  

  //Engine.run(myEngine)
}

function draw() {
  background("black");  
  


  //step4
  Engine.update(engine);

  //step5 displaying the body/box
  //fill("skyblue");
  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
}