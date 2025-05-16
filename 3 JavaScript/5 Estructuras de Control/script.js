/*
switch (3 == 2) {
	case true: console.log('true'); break
	case false: console.log('false')
}
*/

var edad = 3;

if (edad < 0) {
    console.log("Mentira");
} else if ( edad < 18 ) {
    console.log("No puedes entrar");
} else
    console.log("Sigue");

// Sin llaves puede ejecutar solo una instrucción



var pais = "colombia";

switch (pais) {
    case 'colombia':
        document.write( "Eres Colombiano" );
        break;

    case 'venezuela':
        document.write( "Eres Venezolano" );
        break;

    default:
        document.write( "Eres de otro pais" );
}