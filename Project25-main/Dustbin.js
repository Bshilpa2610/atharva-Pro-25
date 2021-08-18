class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:0,
            density:0.1

        }
        this.image=loadImage("Images/Dustbingreen.png");
        
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);

        fill("red");

        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        //image(this.image,0,0,this.width,this.height);


    }
}