
class Circle{
    constructor(x, y, width, height){
        var options = {
            'restituition' : 0.6,
            'density' : 1.0,
            'friction' : 1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
    //this.body.position.x = mouseX

    push();
    rectMode(CENTER);
    //translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
    }

}



