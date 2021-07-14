class Canon{
    constructor(angle){
        var option={
            isStatic:true
        }
        this.canon= Bodies.rectangle(width/2, height-350, 100,100, option)
        this.canonImg=loadImage("canon.png")
        this.angle= angle
        World.add(world, this.canon)
    }
    display(){
        if (keyIsDown(RIGHT_ARROW) && this.angle< 0.3 ){
            this.angle= this.angle+0.02
            Matter.Body.setAngle(this.canon, this.angle)
        }

        
        if (keyIsDown(LEFT_ARROW) && this.angle>-1.3 ){
            this.angle= this.angle-0.02
            Matter.Body.setAngle(this.canon, this.angle)
        }
        push()
        translate(this.canon.position.x,this.canon.position.y )
        rotate(this.canon.angle)
        rect(-10,-10, 100,150)
        //imageMode(CENTER)
        //image(this.canonImg,0,0, 150,150)
        pop()

       
    }
}