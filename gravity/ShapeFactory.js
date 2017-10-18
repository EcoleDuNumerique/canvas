class ShapeFactory {

    constructor(){
        this.elements = [];
        this.lastY = 0;
    }

    generate(){

        var color = new Color().random();
        var element = new Circle( x, y, color, 20 );
        this.elements.push( element );
        return element;

    }

}