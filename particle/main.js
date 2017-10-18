var canvas = document.getElementById( "myCanvas" );
var ctx = canvas.getContext( "2d" );

var windowW = $(window).width();
var windowH = $(window).height();

canvas.width = windowW;
canvas.height = windowH;

var circle = new Circle( 300, 300, new Color().random(), 10 );
var factory = new ShapeFactory();
factory.generate(50, 100);

$(canvas).mousemove( function(e) {

    //console.log( e.clientX, e.clientY );
    

});

function animate(){

    ctx.clearRect( 0, 0, windowW, windowH );

    for( var element of factory.elements ){
        element.move();
        element.draw( ctx );
    }

    requestAnimationFrame( animate );
}

requestAnimationFrame( animate );

$(window).resize(function(){

    var windowW = $(window).width();
    var windowH = $(window).height();
    
    canvas.width = windowW;
    canvas.height = windowH;

});

function reverse(){

    for( var element of factory.elements ){
        element.Dx *= -1;
        element.Dy *= -1;
    }

}