class tree{
    constructor(x,y){
       this.x=x;
       this.y=y;
       this.dustbinWidth = 200
       this.dustbinHeight= 100
       this.thickness=20
       this.angle=0
       this.bottomBody= Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.thickness,{isStatic:true})
       this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2,20,100,{isStatic:true})
       Matter.Body.setAngle(this.leftWallBody, this.angle);
       this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2,20,100,{isStatic:true})
        World.add(world,this.bottomBody)
        World.add(world,this.leftWallBody)
        World.add(world,this.rightWallBody)
        //this.dustbin=loadImage("dustbingreen.png")

    }
     display(){
        var posBottom=this.bottomBody.position;
        var posLeft=this.leftWallBody.position;
        var posRight=this.rightWallBody.position;
        push()
        translate(posBottom.x,posBottom.y)
        rectMode(CENTER)
        stroke(255)
        angleMode(RADIANS);
        fill(255)
        imageMode(CENTER)
        image(this.dustbin,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
		//rect(0,0,this.dustbinWidth, this.thickness);
        pop()
        
       
        push()
        translate(posLeft.x,posLeft.y)
        rectMode(CENTER)
        stroke(255)
        angleMode(RADIANS);
        rotate(this.angle)
        fill(255)
		//rect(0,0,this.thickness, this.dustbinHeight);
		pop()

        
        push()
        translate(posRight.x,posRight.y)
        rectMode(CENTER)
        stroke(255)
        angleMode(RADIANS);
        rotate(-1*this.angle)
        fill(255)
	//	rect(0,0,this.thickness, this.dustbinHeight);
		pop()
     }
}