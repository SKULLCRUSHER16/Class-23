const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var Myengine,Myworld;
var ground;
var box1,box2;

function setup() {
  createCanvas(800,800);
Myengine=Engine.create();
Myworld=Myengine.world;
box1=new Box(200,300,57,40);
box2=new Box(240,200,57,40);
ground=new Ground(400,390,800,30);
}

function draw() {
  background(0);
  Engine.update(Myengine);
box1.display();
box2.display();
ground.display();
}