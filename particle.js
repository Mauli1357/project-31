class Particle{
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.color)
        ellipse( 0, 0, this.radius);
        pop();
      }
}