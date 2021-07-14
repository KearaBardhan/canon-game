class Cball{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.cball= Bodies.circle(x,y, 10, options)
        this.cballImg=loadImage("blue.png")
        World.add(world, this.cball)
        this.x= x
        this.y=y
    }
    display(){
        imageMode(CENTER)
        image(this.cballImg, this.x,this.y, 50,50)
    }
}