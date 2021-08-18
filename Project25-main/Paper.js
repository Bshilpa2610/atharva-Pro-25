class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.image = loadImage("Images/Paper.png")
        this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
      

        World.add(world,this.body);
    }

    display(){
       
        push()
        translate(this.body.position.x,this.body.position.y)
        
        //rectMode(CENTER);
        ellipseMode(CENTER);

        fill("blue");
        imageMode(CENTER);
        

        //image(this.image,0,0,this.radius,this.radius);
        ellipse(0,0,this.radius,this.radius);
        pop()
        
    }
}