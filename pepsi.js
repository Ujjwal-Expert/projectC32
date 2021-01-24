class Pepsi extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/pepsi.png");
    this.visibility = 225;
    this.scoreImage=loadImage("sprites/10.png")
  }
  display(){
    if(this.body.speed<10){
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
      push();
      tint(225,this.visibility+70);
      image(this.scoreImage,pos.x+20,pos.y-50,70,70);
      pop();

      if(this.visibility<20&&this.visibility>-20){
        score = score+1;
      }
    }
  }
  
}
