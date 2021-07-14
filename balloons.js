class Balloons{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.balloon= Bodies.circle(x,y,25, option)
        this.balloonImg= loadImage("orange.png")
        this.balloonImg1= loadImage("blue.png")
        this.balloonImg2= loadImage("purple.png")

        this.r=25
        World.add(world, this.balloon)
    }

    /*

    display(){
        imageMode(CENTER)
        var rand= Math.round(random(1,3))
        switch(rand){
            case 1:
            break;
            case 2: image(this.balloonImg1, this.balloon.position.x,this.balloon.position.y,50, 50);
            break;
            case 3: image(this.balloonImg2, this.balloon.position.x,this.balloon.position.y,50, 50);
            break;
            default: break;
        
        }
    }
    */

        display1(){
            imageMode(CENTER)
            image(this.balloonImg, this.balloon.position.x,this.balloon.position.y,50, 50);
        }

        display2(){
            imageMode(CENTER)
            image(this.balloonImg1, this.balloon.position.x,this.balloon.position.y,50, 50);
        }

        display3(){
            imageMode(CENTER)
            image(this.balloonImg2, this.balloon.position.x,this.balloon.position.y,50, 50);
        }
        
    }
