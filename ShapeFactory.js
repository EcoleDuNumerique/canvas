class ShapeFactory {

    constructor(){
        this.elements = [];
        this.lastY = 0;
    }

    getRandomItem(){

        var color = new Color().random();
        var element = null;
        if( Math.round( Math.random() ) )
            element = new Square( 0, this.lastY, color, 10 );
        else
            element = new Circle( 5, this.lastY + 5, color, 5 );

        return element;
    }

    generate( time, max = 50 ){

        var interval = setInterval(() => {

            this.lastY += 12;

            var element = this.getRandomItem();
        
            this.elements.push( element );

            if( this.elements.length >= max ){
                clearInterval( interval );
            }

        }, time);
    }

}

// function( test ){
//     return this.truc;
// }

// (test) => { return this.truc };