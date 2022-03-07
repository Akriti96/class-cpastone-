class Ball {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r

        var options = {
            isStatic: false,
            friction: 0.1,
            restitution: 0.45 ,
            density:1
        }
        this.body = Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body)

        this.image = loadImage("melon.png")

    }
    display() {
        var pos = this.body.position
        push()
        fill("red")
        ellipseMode(RADIUS)
        // ellipse(pos.x, pos.y, this.r, this.r)
        translate(pos.x, pos.y)
        imageMode(CENTER)
        image(this.image,0,0, this.r, this.r)
        pop()
    }
}