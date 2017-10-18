class ShapeFactory {

    constructor(){
        this.elements = [];
        this.lastY = 0;
    }

    getItem(){

        var color = new Color().random();
        return new Circle( windowW/2, windowH/2, color, 5 );
        
    }

    generate( time, max = 50 ){

        var interval = setInterval(() => {

            this.lastY += 12;

            var element = this.getItem();
        
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