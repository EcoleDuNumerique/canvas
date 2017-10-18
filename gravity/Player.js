class Player extends Square {

    constructor( x, y, color, floor ){
        super(x, y, color, 50);
        this.velocity = 0;
        this.floor = floor - this.dimension;
    }

    setStart( x, y ){
        this.point.x = x;
        this.point.y = y - this.dimension;
    }

    jump(){
        this.velocity -= 20;
    }

    physics(){
        this.velocity += 1;
        this.point.y += this.velocity;
        if( this.point.y > this.floor ){
            this.point.y = this.floor;
            this.velocity = 0;
        }
    }

}