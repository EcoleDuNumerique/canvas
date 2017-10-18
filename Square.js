class Square extends Shape {

    constructor( x, y, color, d ){

        super( x, y, color );
        this.dimension = d;

    }

    draw( ctx ){

        ctx.beginPath();
        ctx.rect( this.point.x, this.point.y, this.dimension, this.dimension );
        super.draw( ctx );
        
    }

}