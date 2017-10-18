var app = new App();

$(document).keydown(function(e){

    if( e.keyCode == 32 )
        app.player.jump();

});



function animate(){

    app.clear();
    app.player.physics();
    app.player.draw( app.ctx );

    requestAnimationFrame( animate );
}
requestAnimationFrame( animate );

