class Shape {

    constructor( x, y, color ){

        this.point = new Point( x, y );
        this.color = color;

    }

    draw( ctx ){
        ctx.fillStyle = this.color.toString();
        ctx.fill();
    }

}