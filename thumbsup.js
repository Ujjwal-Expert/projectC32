class Thumb extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/thumbsup.png");
      this.scoreImage=loadImage("sprites/20.png");
      this.visibility = 225;
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
        image(this.scoreImage,pos.x+50,pos.y-30,70,70);
        pop();

        if(this.visibility<40&&this.visibility>-40){
          score = score+1;
        }
      }
    }
  }
  