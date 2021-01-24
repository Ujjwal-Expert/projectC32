
class Ball{
  constructor(x,y){
      var options={
          restitution:0.4,
          density:2,
          friction:2
      }
      this.body = Bodies.circle(x,y,20,options);
      this.width = width;
      this.image = loadImage("sprites/ball.png");
      World.add(world,this.body);
  }
  display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,50,50);
      pop();
  }
}
