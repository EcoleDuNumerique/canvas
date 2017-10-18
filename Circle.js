class Circle extends Shape {

    constructor( x, y, color, r ){
        
        super( x, y, color );
        
        this.radius = r;
        this.sAngle = 0;
        this.eAngle = 2 * Math.PI;

    }

    draw( ctx ){

        ctx.beginPath();
        ctx.arc( this.point.x, this.point.y, this.radius, this.sAngle, this.eAngle );
        ctx.fillStyle = this.color.toString();
        ctx.fill();
        
    }



}