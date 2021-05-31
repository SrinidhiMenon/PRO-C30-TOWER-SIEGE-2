class Block{
    constructor(x, y, width, height) {
        var options = {
        friction: 1           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.v = 255
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<6){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();}
        else{
        push();
        this.v = this.v-5
        World.remove(world,this.body);
        noStroke();
        fill(255,this.v);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
        
        }
      }
}
