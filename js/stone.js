class Stone {
    constructor(x,y,r){
     var  options= {
         restitution:0,
         friction:1,
         density:1.2,
         isStatic:false
        
     }
     this.stone=Bodies.circle(x,y,r/2,options)
     this.x=x
     this.y=y
     this.r=r
    this.image=loadImage("images/stone.png")
    
     World.add(world,this.stone)

    }
    display()
	{
		var stonePos=this.stone.position;	
		push()
		translate(stonePos.x, stonePos.y);
		//rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}