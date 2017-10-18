class Shape {

    constructor( x, y, color ){

        this.point = new Point( x, y );
        this.color = color;

        this.Dx = 0;
        this.Dy = 0;

    }

    move(){

        this.point.x += this.Dx;
        this.point.y += this.Dy;

    }

    draw( ctx ){

        ctx.fillStyle = this.color.toString();
        ctx.fill();
        
    }

}