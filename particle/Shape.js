class Shape {

    constructor( x, y, color ){

        this.point = new Point( x, y );
        this.color = color;
        this.speed = 5;

        this.Dx = Math.random() * 2 - 1;
        this.Dy = Math.random() * 2 - 1;    

    }

    draw( ctx ){
        ctx.fillStyle = this.color.toString();
        ctx.fill();
    }

    move(){
        this.point.x += this.Dx * this.speed;
        this.point.y += this.Dy * this.speed;

        if( this.point.x > windowW || this.point.x < 0 ){
            this.Dx *= -1;
        }

        if( this.point.y > windowH || this.point.y < 0 ){
            this.Dy *= -1;
        }
    }


}