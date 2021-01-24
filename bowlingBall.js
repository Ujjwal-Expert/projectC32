class Bowling{
    constructor(x,y){
        var options={
            restitution:0.4,
            density:1,
            friction:1
        }
        this.body = Bodies.circle(x,y,20,options);
        this.width = width;
        this.image = loadImage("sprites/bowling.png");
        World.add(world,this.body);

        this.visibility=225;
        this.scoreImage=loadImage("sprites/5.png")
    }
    display(){
        if(this.body.speed<7){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,40,40);
            pop();
        }
        else{
            var pos = this.body.position;
            
            World.remove(world,this.body);
            this.visibility = this.visibility-4;

            push();
            tint(225,this.visibility+70);
            image(this.scoreImage,pos.x+20,pos.y-50,70,70);
            pop();
      
            if(this.visibility<10&&this.visibility>-10){
              score = score+1;
            }
          }
    }
}