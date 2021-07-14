const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score =0;


function preload(){
    

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    angle= PI/4
    shelf=new Shelf()
    canonBall= new Cball(width/2+50,height-320)
    canon=new Canon(angle)
    balloon1= new Balloons(1000,250)
    balloon2= new Balloons(1040,250)
    balloon3= new Balloons(1080,250)
    balloon4= new Balloons(1120,250)
    balloon5= new Balloons(1160,250)
    balloon6= new Balloons(1200,250)
    balloon7= new Balloons(1240,250)
    balloon8= new Balloons(1260,250)
    balloon9= new Balloons(1300,250)
    balloon10= new Balloons(1340,250)

   
}
   

function draw(){
    background(255)
    Engine.update(engine)

    if(frameCount%80==0){

    var rand=Math.round(random(1,3))
    switch(rand){
        case 1: balloon1.display1()
        break;
        case 2: balloon1.display2()
        break;
        case 3: balloon1.display3()
        break;
        default:break;
    }

    var rand=Math.round(random(1,3))
    switch(rand){
        case 1: balloon2.display1()
        break;
        case 2: balloon2.display2()
        break;
        case 3: balloon2.display3()
        break;
        default:break;
    }

    var rand=Math.round(random(1,3))
    switch(rand){
        case 1: balloon3.display1()
        break;
        case 2: balloon3.display2()
        break;
        case 3: balloon3.display3()
        break;
        default:break;
    }
}

    
    
    shelf.display()
    canon.display()
    canonBall.display()
    
    
}



