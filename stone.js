class stone
{
    constructor(){
        var options={
            isStatic:false,
            restituition:0,
            friction:1,
            density:1.2
        }
    }
    display()
    {
        var stonepos=this.body.position;

        push()
        translate(stonepos.x,stonepos.y)
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        imageMode(CENTER)
        image(this.stone,0,0,this.r,this.r)
        //ellipse(0,0,this.r,this.r);
        pop() 
    }

}