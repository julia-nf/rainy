
var Drop = function() {
    var slowdown = 100,
        g = 9.8/slowdown,
        speed = 5/random(1, 50);

    this.pos = createVector(random(0, width), 0);
    this.velocity = createVector(0, speed);
    this.acceleration = createVector(0, g);

    this.update = function (){
        this.velocity.add(this.acceleration);
        this.pos.add(this.velocity);
    };

    this.display = function() {
        fill(250, 250, 250);
        ellipse(this.pos.x, this.pos.y, 3, 3);
    };

};
