class Shelf{
    constructor(){
    var option={
        isStatic:true
    }
    this.w=width
    this.h=300
    this.shelf= Bodies.rectangle(width/2,height-150,this.w,this.h, option)
    World.add(world, this.shelf)


}
display(){
    rectMode(CENTER)
    rect(this.shelf.position.x,this.shelf.position.y, this.w,this.h)

}
}
