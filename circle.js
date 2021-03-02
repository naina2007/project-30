class Circle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

		this.circle = loadImage("polygon.png");

	}
	display()
	{
			
			var circlepos=this.body.position;		

			push()
			translate(circlepos.x, circlepos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			image(this.circle,-20,-20,50,50)
			pop()
			
	}

}