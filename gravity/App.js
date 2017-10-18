class App {

    constructor(){

        this.canvas = $("#myCanvas")[0];
        this.ctx = this.canvas.getContext("2d");

        this.limitH = 400;
        this.limitW = 600;

        this.shapeFactory = new ShapeFactory();

        this.player = new Player( 0, 0, new Color().random(), this.limitH );

        this.init();

    }

    init(){

        this.canvas.width = this.limitW;
        this.canvas.height = this.limitH;

        this.player.setStart( 0, 0);
    }

    clear(){
        this.ctx.clearRect( 0, 0, this.limitW, this.limitH );
    }

}