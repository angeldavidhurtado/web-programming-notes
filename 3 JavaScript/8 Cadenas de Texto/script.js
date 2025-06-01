var texto = "Hola mundo!!!, soy un texto";

document.write( "Texto: \"" + texto + "\"" );

var longitud = texto.length;
document.write( "<br /><br />Longitud: " + longitud );

var subCadena = texto.substring(3, 9); // desde donde hasta donde
document.write( "<br />Subcadena: " + subCadena );

subCadena = texto.substr(2, 6); // desde donde cuantos caracteres
document.write( "<br />Subcadena: " + subCadena );

var reemplaso = texto.replace("Hola", "Adios");
document.write( "<br />Reemplsar: " + reemplaso );

var mayusculas = texto.toUpperCase();
document.write( "<br />Mayusculas: " + mayusculas );

var minusculas = texto.toLowerCase();
document.write( "<br />Minusculas: " + minusculas );

var primerAparicion = texto.indexOf('o');
document.write( "<br />Primer Aparicion de \"o\": " + primerAparicion );

var ultimaAparicion = texto.lastIndexOf('o');
document.write( "<br />Última Aparicion de \"o\": " + ultimaAparicion );
