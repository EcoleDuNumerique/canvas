var canvas = document.getElementById( "myCanvas" );
var ctx = canvas.getContext( "2d" );

var color = new Color().random();

var circle = new Circle( 100, 100, color, 50 );
circle.draw( ctx );