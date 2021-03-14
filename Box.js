// class is a design of the object
class Box{
constructor(x,y,width,height){
    var B={
        restitution: 0.8
        }
this.body=Bodies.rectangle(x,y,width,height,B)
this.width=width
this.height=height
World.add(Myworld,this.body)
}
display(){
    // In line 15 nad 16, var angle=this.body.angle here means name spacing  means angle is the shorten name of this.body.angle
var angle=this.body.angle
var pos=this.body.position
// push means start
push()
// rotate means it will move boxes on some angle and translate means it will move in that position only it will not go anywhere
translate(pos.x,pos.y)
rotate(angle)
fill(255);
rectMode(CENTER);
rect(0,0,this.width,this.height)
// pop means stop
pop()
}
}