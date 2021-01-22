
 class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
    
    var options ={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB : {x:this.offsetX, y: this.offsetY}
        
    }
    this.offsetX=offsetX
    this.offsetY=offsetY

    this.chain = Constraint.create(options);
    World.add(world,this.chain)


 }
 display(){
    strokeWeight(5);
    stroke("black")
    var point1 = this.chain.bodyA.position
    var point2 = this.chain.bodyB.position
    line(point1.x, point1.y,point2.x+this.offsetX,point2.y+this.offsetY)
 }
}
