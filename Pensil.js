class Pensil extends BaseClass {
  constructor(x, y, width, height,angle){
    super(x,y,width,height);
    this.image = loadImage("sprites/pensil.png");
    Matter.Body.setAngle(this.body,angle);
    this.visibility = 225;
    
  }
  display(){
    if(this.body.speed<6){
      super.display();
    }
    else{
      var pos = this.body.position;
      push();
      World.remove(world,this.body);
      this.visibility = this.visibility-4;
      tint(225,this.visibility);
      rotate(this.body.angle);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
    }
  }

}
