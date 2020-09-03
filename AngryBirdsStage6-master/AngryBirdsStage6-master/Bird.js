class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.path = [];
    this.image1 = loadImage("sprites/smoke.png");
  }


  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.speed>25 && this.body.position.x> 200){

    var position = [this.body.position.x,this.body.position.y]
    this.path.push(position);
    }
    //[[x1,y1],[x2,y2],[x3,y3],[x4,y4]]
    for(var i=0;i<this.path.length;i++){
      image(this.image1,this.path[i][0],this.path[i][1])
    }

  }
}
