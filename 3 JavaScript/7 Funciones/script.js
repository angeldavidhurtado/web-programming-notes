function suma(a, b) {
    var resultado = a + b;
    return resultado;
}

// Guardar una función anónima dentro de una variable
var resta = function(a, b) {
    var resultado = a - b;
    return resultado;
}


var resultado = suma(3, 5);
document.write( resultado );

document.write( "<br />" );

var resultado = resta(3, 5);
document.write( resultado );



/* Función autoinvocada
Permite proteger nuestro código de código de terceros
es decir, evitar problemas de ambiguedad
*/
( function (nombre) {
    alert("Hola " + nombre);
} ("Ángel") );
