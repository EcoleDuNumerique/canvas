class Shape {

    constructor( x, y, color ){

        this.point = new Point( x, y );
        this.color = color;
        this.direction = "right";
        this.speed = 5;

    }

    draw( ctx ){
        ctx.fillStyle = this.color.toString();
        ctx.fill();
    }

    moveLeft(){
        this.point.x -= this.speed - ( this.point.x * (  this.speed/400 ) );
        this.direction = "left";
    }

    moveRight(){
        this.point.x +=  this.speed - (  this.speed * ( this.point.x/400 ) );
        this.direction = "right";
    }

    move( min, max ){

        if( this.direction == "right" && this.point.x < max ){
            this.moveRight();
        }
        else if( this.direction == "right" ){
            this.moveLeft();
        }
        else if( this.direction == "left" && this.point.x > min){
            this.moveLeft();
        }
        else {
            this.moveRight();
        }

    }

}