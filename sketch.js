const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,798,480,4);
  
  //divisions
  division = new Division(240,600,6,400);
  division1 = new Division(320,600,6,400);
  division2 = new Division(400,600,6,400);
  division3 = new Division(480,600,6,400);
  division4 = new Division(160,600,6,400);
  division5 = new Division(80,600,6,400);
  division6 = new Division(0,600,6,400);

  //plinko

  plinko  = new Plinko(40,75,10);
  plinko1 = new Plinko(90,75,10);
  plinko2 = new Plinko(140,75,10);
  plinko3 = new Plinko(190,75,10);
  plinko4 = new Plinko(240,75,10);
  plinko5 = new Plinko(290,75,10);
  plinko6 = new Plinko(340,75,10);
  plinko7 = new Plinko(390,75,10);
  plinko8 = new Plinko(440,75,10);
  
  plinko9  = new Plinko(40,175,10);
  plinko10 = new Plinko(90,175,10);
  plinko11 = new Plinko(140,175,10);
  plinko12 = new Plinko(190,175,10);
  plinko13 = new Plinko(240,175,10);
  plinko14 = new Plinko(290,175,10);
  plinko15 = new Plinko(340,175,10);
  plinko16 = new Plinko(390,175,10);
  plinko17 = new Plinko(440,175,10);

  plinko18  = new Plinko(40,275,10);
  plinko19 = new Plinko(90,275,10);
  plinko20 = new Plinko(140,275,10);
  plinko21 = new Plinko(190,275,10);
  plinko22 = new Plinko(240,275,10);
  plinko23 = new Plinko(290,275,10);
  plinko24 = new Plinko(340,275,10);
  plinko25 = new Plinko(390,275,10);
  plinko26 = new Plinko(440,275,10);

  plinko27 = new Plinko(65,125,10);
  plinko28 = new Plinko(115,125,10);
  plinko29 = new Plinko(165,125,10);
  plinko30 = new Plinko(215,125,10);
  plinko31 = new Plinko(265,125,10);
  plinko32 = new Plinko(315,125,10);
  plinko33 = new Plinko(365,125,10);
  plinko34 = new Plinko(415,125,10);

  plinko35 = new Plinko(65,225,10);
  plinko36 = new Plinko(115,225,10);
  plinko37 = new Plinko(165,225,10);
  plinko38 = new Plinko(215,225,10);
  plinko39 = new Plinko(265,225,10);
  plinko40 = new Plinko(315,225,10);
  plinko41 = new Plinko(365,225,10);
  plinko42 = new Plinko(415,225,10);

  plinko43 = new Plinko(65,325,10);
  plinko44 = new Plinko(115,325,10);
  plinko45 = new Plinko(165,325,10);
  plinko46 = new Plinko(215,325,10);
  plinko47 = new Plinko(265,325,10);
  plinko48 = new Plinko(315,325,10);
  plinko49 = new Plinko(365,325,10);
  plinko50 = new Plinko(415,325,10);


  
}

  var particles = [];

function draw() {
  background("black");  
  Engine.update(engine);


  if(frameCount%60===0)
  {
    particles.push(new Particle(random (width/2-10, width/2+10), 10, 10));

  }
  ground.display();
  division.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

  plinko.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();

  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();

  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display(); 

  plinko27.display(); 
  plinko28.display(); 
  plinko29.display(); 
  plinko30.display(); 
  plinko31.display(); 
  plinko32.display(); 
  plinko33.display(); 
  plinko34.display(); 

  plinko35.display(); 
  plinko36.display(); 
  plinko37.display(); 
  plinko38.display(); 
  plinko39.display(); 
  plinko40.display(); 
  plinko41.display(); 
  plinko42.display(); 

  plinko43.display(); 
  plinko44.display(); 
  plinko45.display(); 
  plinko46.display(); 
  plinko47.display(); 
  plinko48.display(); 
  plinko49.display(); 
  plinko50.display(); 



  drawSprites();
}