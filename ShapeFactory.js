class ShapeFactory {

    constructor(){
        this.elements = [];
        this.lastY = 0;
    }

    generate( time ){

        setInterval(() => {

            this.lastY += 12;
            var color = new Color().random();
            var element = null;
            if( Math.round( Math.random() ) )
                element = new Square( 0, this.lastY, color, 10 );
            else
                element = new Circle( 5, this.lastY + 5, color, 5 );
            
            this.elements.push( element );

        }, time);
    }

}

// function( test ){
//     return this.truc;
// }

// (test) => { return this.truc };