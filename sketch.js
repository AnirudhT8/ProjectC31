const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
//var ground1;
var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,20);

    for(var k=0; k<=1200; k=k+80){
        divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    }

        for (var j = 40; j <=1200; j=j+50) 
        {    
           plinkos.push(new Plinko(j,75));
        }
    
        for (var j = 15; j <=1200-10; j=j+50) 
        {    
           plinkos.push(new Plinko(j,155));
        }
    
        for (var j = 40; j <=1200; j=j+50) 
        {    
           plinkos.push(new Plinko(j,255));
        }
    
         for (var j = 15; j <=1200-10; j=j+50) 
        {    
           plinkos.push(new Plinko(j,355));
        }


}

function draw(){
    background("black");
    Engine.update(engine);
  
  ground.display();

    for (var a = 0; a < plinkos.length; a+1) {
        plinkos[a].display();    
      }
    
      if(frameCount%60===0){
        particles.push(new Particle(random(1200/2-30, 1200/2+30), 10,8));
      }
    
     for (var b = 0; b < particles.length; b+1) { //particles.length to 10
        particles[b].display();
      }
    
      for(var c=0; c < divisions.length; c+1){ //divisions.length to 10
        divisions[c].display();
      }
    
}
