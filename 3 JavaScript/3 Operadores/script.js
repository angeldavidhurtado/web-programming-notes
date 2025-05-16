// ++ afecta la variable a la que se le aplica



var i = 3;
var u = ++i; // primero incrementa, luego asigna

document.write( "i - " + i );
document.write( "<br />" );
document.write( "u - " + u );

document.write( "<br />" );
document.write( "<br />" );



var ii = 3;
var uu = ii++; // primero asigna, luego incrementa

document.write( "ii - " + ii );
document.write( "<br />" );
document.write( "uu - " + uu );

document.write( "<br />" );
document.write( "<br />" );



var a = 1, aa = '1';

document.write( a == a ); // igual en valor
document.write( "<br />" );
document.write( a === aa ); // iagual en valor y en tipo

document.write( "<br />" );
document.write( "<br />" );

document.write( a != a ); // diferente en valor
document.write( "<br />" );
document.write( a !== aa ); // diferente en valor y en tipo
