class Ground{
constructor(x,y,width,height){
var A={
    isStatic: true
    }
this.body=Bodies.rectangle(x,y,width,height,A);
this.width=width;
this.height=height;
World.add(Myworld,this.body);
}
// We use display for making objects or we can say sprites to see with the help of p5 function and matter function hellps in storing this data in the memory location
display(){
var pos=this.body.position
rectMode(CENTER);
fill("brown");
rect(pos.x,pos.y,this.width,this.height);
}
}