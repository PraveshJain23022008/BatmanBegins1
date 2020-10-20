const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var thunder1, thunder2,thunder3, thunder4;
var engine,world;
var rnum;
var drops = [];
var maxDrops = 100;
var thunderCreatedFrame = 0;
var thunder
var r = Math.round(random(0,400));

function preload(){
 thunder1 = loadImage("images/thunderbolt/thunderb1.png");
 thunder2 = loadImage("images/thunderbolt/thunderb2.png");
 thunder3 = loadImage("images/thunderbolt/thunderb3.png");
 thunder4 = loadImage("images/thunderbolt/thunderb4.png");
}

function setup(){
 engine = Engine.create();
 world = engine.world;
createCanvas(400,700);
umbrella = new Umbrella(200,650);

//creating drops.
if(frameCount%150 === 0){
    for(var i = 0;i<maxDrops;i++){
        drops.push(new Drops (r,r));
    }
}
    
}

function draw(){
Engine.update(engine);
background(0);
rnum = Math.round(random(1,4));

if(frameCount%60 === 0){
    thunderCreatedFrame = frameCount;
    thunder = createSprite(random(10,370),random(10,30),10,10);
    switch(rnum){
        case 1:thunder.addImage(thunder1);
        break;
        case 2:thunder.addImage(thunder2);
        break;
        case 3:thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
        default:break;
    }
    thunder.scale = random(0.3,0.8);
}
if(thunderCreatedFrame+10 === frameCount && thunder){
    thunder.destroy();
}
umbrella.display();
for(var i = 0; i<maxDrops;i++){
  drops[i].display();
  drops[i].updateY();
}
drawSprites();
}   

