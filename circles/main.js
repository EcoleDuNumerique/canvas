var app = new App();

app.canvas.onmousemove = function(e){

    var Dx = e.clientX - app.oldcursor.x;
    var Dy = e.clientY - app.oldcursor.y;
    app.oldcursor.x = e.clientX;
    app.oldcursor.y = e.clientY;

    app.shapeFactory.generate(
        e.clientX,
        e.clientY,
        Dx,
        Dy
    );

};

function animate(){

    app.ctx.clearRect( 0, 0, app.windowW, app.windowH );

    for( var element of app.shapeFactory.elements ){
        element.move();
        element.draw( app.ctx );
    }

    requestAnimationFrame( animate );
}
requestAnimationFrame( animate );