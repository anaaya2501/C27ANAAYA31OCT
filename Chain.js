class Chain {
constructor(bodyA,bodyB){
var options = {
    bodyA : bodyA,
    bodyB : bodyB,
    stiffness : 0.04,
    length : 20

}
this.chainLink = Constraint.create(options);
World.add(world,this.chainLink)


}
display(){
 var A = this.chainLink.bodyA.position;
 var B = this.chainLink.bodyB.position;
 line(A.x,A.y,B.x,B.y);
}
    
}