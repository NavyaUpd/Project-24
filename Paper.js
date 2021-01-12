class Paper {
    constructor(){
        var paperOptions = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(200, 300, 50, paperOptions);
        this.radius = 50;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill(255);
        ellipse(pos.x, pos.y, 50, 50);
    }
}

