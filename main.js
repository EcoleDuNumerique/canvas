var canvas = document.getElementById( "myCanvas" );
var ctx = canvas.getContext( "2d" );

var factory = new ShapeFactory();
factory.generate( 100 );

/* Systeme d'animation natif de javascript */
function animate(){

    ctx.clearRect( 0, 0, 800, 500 );//Effacer un rectangle donné
    
    for( var element of factory.elements ){
        element.move(1, 300);
        element.draw( ctx );
    }

    requestAnimationFrame( animate ); //On rappelle l'animation par frame
}

requestAnimationFrame( animate ); //Gere l'animation frame par frame