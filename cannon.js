class Cannon {
    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle;
this.cannonImage=loadImage("assets/canon.png")
this.cannonbase=loadImage("assets/cannonBase.png")
    }
    display(){
        if(keyIsDown(RIGHT_ARROW)){
            this.angle+=1
        }
        if(keyIsDown(LEFT_ARROW)){
            this.angle-=1
        }

        push ()
        translate (this.x, this.y)
        rotate (this.angle)

        imageMode(CENTER)
        image (this.cannonImage,this.x, this.y , this.width, this.height)
        pop ()
        image(this.cannonbase, 70,20,200,200)
        noFill()
    }
}