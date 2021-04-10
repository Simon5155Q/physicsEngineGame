const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var circle1, box;
function setup() {
  createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;
    
    box = createSprite(200, 700, 40, 40);

    circle1 = new Circle(200, 200, 15, 15);

   
}

function draw() {
  background("black");
  box.x = mouseX;
  touch();
  drawSprites();

  Engine.update(engine);
  //if (frameCount % 60 === 0){
    circle1.display();
  //}

  
}

function touch(){
  if(collide(box, circle1.body)){
      console.log("It works");
    
      }
} 