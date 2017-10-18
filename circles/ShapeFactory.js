class ShapeFactory {

    constructor(){
        this.elements = [];
        this.lastY = 0;
    }

    generate( x, y, Dx, Dy ){

        var color = new Color().random();
        var element = new Circle( x, y, color, 20 );
        element.Dx = Dx;
        element.Dy = Dy;
        this.elements.push( element );
        return element;

    }

}