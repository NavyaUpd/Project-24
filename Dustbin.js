class Dustbin{
    constructor(x, y, width, height){
        var dustbinOptions ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height,dustbinOptions);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("red");
        rectMode(CENTER);
        noStroke();
        rect(pos.x, pos.y, this.width, this.height);
    }
}