class Rope {
    constructor(bodyA, pointB) {
        this.bodyA = bodyA
        this.pointB = pointB
        this.sling = Constraint.create({
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 100
        })

        World.add(world, this.sling)
    }

    fly(){
        this.sling.bodyA=null
    }

    display() {
        // if any body is attched to sling this condition should be true
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("cyan");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}