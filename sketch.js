//constraint... engine pulls all rest coaches.
// ability to create rigid bodies and assign physical properties
//like mass, area, density..


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var constraintLog;
var slingshot;
var gameState="start";

var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg2.jpg");
    bgSound = loadSound("angry.mp3");
    scoreImg = loadImage("sprites/score.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(width/2,height,width,20);

    ball = new Ball(200,250);
    slingShot = new SlingShot(ball.body,{x:200, y:250});

    platform3 = new Ground(150,420,300,15)

    
    platform1=new Ground(700,400,400,15);
    pepsi1 = new Pepsi(600,350,50,100);
    pepsi2 = new Pepsi(660,350,50,100);
    pepsi3 = new Pepsi(720,350,50,100);
    pepsi4 = new Pepsi(780,350,50,100);

    pensil1 = new Pensil(690,285,250,15,PI*2);
    pepsi5 = new Pepsi(660,220,50,100);
    pepsi6 = new Pepsi(720,220,50,100);
    pensil2 = new Pensil(690,172,200,12,PI*2); 
    //pensil3 = new Pensil(560,60,150,9,PI/2);
    //pensil4 = new Pensil(620,60,150,9,PI/2);

    bow1 = new Bowling(650,140);
    bow2 = new Bowling(730,140);
    bow3 = new Bowling(690,140);
    bow4 = new Bowling(670,105);
    bow5 = new Bowling(710,105);
    bow6 = new Bowling(690,65);
    

    pepsi7 = new Pepsi(765,150,20,40);
    pepsi8 = new Pepsi(615,150,20,40);
    Matter.Body.setStatic(pepsi7.body,true);
    Matter.Body.setStatic(pepsi8.body,true);

    platform2 = new Ground(1250,300,400,15)
    bow7 = new Bowling(1250,275);
    bow8 = new Bowling(1175,275);
    bow9 = new Bowling(1100,275);
    bow10 = new Bowling(1325,275);
    bow11 = new Bowling(1400,275);
    pensil3 = new Pensil(1250,245,400,20,PI*2);

    thumb1 = new Thumb(1250,175,50,140);
    thumb2 = new Thumb(1175,175,50,140);
    thumb3 = new Thumb(1325,175,50,140);

    bgSound.loop();    
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);

    image(backgroundImg,0,0,1500,640);
    
    
    ground.display();
    slingShot.display();
    ball.display();
    platform3.display();
    
    platform1.display();
    pepsi1.display();
    pepsi2.display();
    pepsi3.display();
    pepsi4.display();

    pensil1.display();
    pepsi5.display();
    pepsi6.display();
    pensil2.display();
    //pensil3.display();
    //pensil4.display();
    
    bow1.display();
    bow2.display();
    bow3.display();
    bow4.display();
    bow5.display(); 
    bow6.display();

    pepsi7.display();
    pepsi8.display();
    
    platform2.display();
    bow7.display();
    bow8.display();
    bow9.display();
    bow10.display();
    bow11.display();

    pensil3.display();
    thumb1.display();
    thumb2.display();
    thumb3.display();

    push();
    textSize(25);
    fill("red");
    text("Angry Ball",30,40);
    pop();

    if(gameState==="onSling"){
        Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
    }
    if(gameState==="none"){
        push();
        textSize(25);
        fill("red");
        text("Press Space for another chance",500,70)
        pop();
    }
    
    image(scoreImg,200,-10,100,100);
    push();
    textSize(25);
    fill("red");
    text(score,300,53);
    pop();
    
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
    gameState="onSling";
}
function mouseReleased(){
    slingShot.fly();
    gameState="none";
    Matter.Body.setStatic(pepsi7.body,false);
    Matter.Body.setStatic(pepsi8.body,false);
}
function keyPressed(){
    if(keyCode === 32){
    slingShot.reload(ball.body);
    }
    gameState="start";
}
async function getTime(){
    
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
    var responseJason = await response.json();
    console.log(responseJason);
    var dayTime = responseJason.datetime;
    var hour = dayTime.slice(11,13);
    console.log(hour);
    if(hour>=06&&hour<=19){
        bg = "sprites/bg2.jpg";
    }
    else{
        
        bg = "sprites/bg20.jpg";

    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);

}