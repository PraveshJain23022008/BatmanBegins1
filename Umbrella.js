class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image = loadImage("images/Walking Frame/walking_2.png");
        World.add(world,this.body);
    }
    display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.postion.y,200,200);
    }
    
}