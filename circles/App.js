class App {

    constructor(){

        this.canvas = $("#myCanvas")[0];
        this.ctx = this.canvas.getContext("2d");

        this.windowW = $(window).width();
        this.windowH = $(window).height();

        this.shapeFactory = new ShapeFactory();

        this.oldcursor = new Point( 0, 0 );

        this.init();

    }

    init(){
        this.canvas.width = this.windowW;
        this.canvas.height = this.windowH;
    }



}