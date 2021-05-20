class Launcher{
    constructor(body,anchor){

     var options={
         bodyA:body,
         pointB:anchor,
         stiffness:0.004,
         length:1    
         }
         this.bodyA=body
         this.pointB=anchor      
   this.body=Constraint.create(options)
   
   World.add(world,this.body)
        }

    attach(){
        this.body.bodyA=stone.body
    }
    fly(){
        this.body.bodyA = null
    }
     display(){
    if(this.body.bodyA){
        var pointA=this.bodyA.position
        var pointB=this.pointB
        strokeWeight(2)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
            }
     }

    
}

