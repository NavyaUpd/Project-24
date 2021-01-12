class Ground{
    constructor(x,y,width,height){
        var groundOptions ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,groundOptions);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("green");
        rectMode(CENTER);
        rect(pos.x, pos.y-20, this.width, this.height);
    }
}