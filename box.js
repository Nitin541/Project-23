class Box {
    constructor (x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0.4,
            friction: 1,
            frictionAir: 0.01	
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    } 
    display () {
        var pos = this.body.position;

        noStroke();
        fill('red');
        rectMode(CENTER);
        
        rect(pos.x, pos.y, this.width, this.height);
    }
}