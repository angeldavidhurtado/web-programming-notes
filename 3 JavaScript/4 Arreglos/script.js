// forEach - itera los elementos de un array y modifica los valores del array
const misDatos = [1, 2, 3]
misDatos.forEach((valor, indice, array) => {
	array[indice] = valor*2
})
console.log("forEach", misDatos) // [2, 4, 6]

// map - recibe un array y regresa otro array
const valores = [2, 4, 3, 6]
const nuevoArreglo = valores.map((valor, indice, arreglo) => {return valor+indice*arreglo.length})
console.log("Valores", valores)
console.log("map", nuevoArreglo)

// filter - crea otro array a partir de otro y solo devuelve los valores que cumplan una condicion, que la funcion que se la pasa retorne true
const filtrado = valores.filter(valor => {return valor % 2 == 0})
console.log("filter", filtrado)

// combinacion - pipe - tuberia - la salida de una funcion es la entrada de otra
const combinacion = valores
	.filter(v=>v%2==0)
	.map(v=>v+1)
console.log("Combinacion", combinacion)

// find - regresa solo la "primer" coincidencia
const coincidencia = valores.find(v=>v%2==0 && v>3)
console.log("Coincidencia", coincidencia)

// includes - sirve tanto para arrays como para strings, lo metodos anteriores, map, filter y find solo con arrays
console.log("Array includes", valores.includes(3)) // retorna true
console.log("String includes", "valores".includes("l")) // retorna true

var dato = 'soy un dato';
var datos = ['a', 'bc', ' d e', 3.5, true, dato];
console.log( datos );



console.log( datos[0] );
datos[0] = 3;
console.log( datos[0] );



datos[20] = 'soy agregado';
console.log( datos );


// Longitud
var longitud = datos.length;
console.log( "Longitud " + longitud );



// Unir
document.write( "<h2>Union</h2>" );
var union = datos.join(' ** ');
document.write( union );



// --- --- --- Último Elemento --- --- ---
// Eliminar
document.write( "<br /><br /><h2>Eliminar último Elemento</h2>" );
datos.pop();
document.write( datos );

// Agregar
document.write( "<br /><br /><h2>Agregar Elemento al Final</h2>" );
datos.push( 'nuevo elemento' );
document.write( datos );


// --- --- --- Primer Elemento --- --- ---
// Eliminar
document.write( "<br /><br /><h2>Eliminar Primer Elemento</h2>" );
datos.shift();
document.write( datos );

// Agregar
document.write( "<br /><br /><h2>Agregar Elemento al Inicio</h2>" );
datos.unshift( 'nuevo elemento' );
document.write( datos );



// Concatenar
document.write( "<br /><br /><h2>Concatenar</h2>" );
var meses = ['Enero', "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var números = [0, 1, 2];
var concatenado = datos.concat( meses, números );
document.write( concatenado );



// Invertir Orden
document.write( "<br /><br /><h2>Invertir Orden</h2>" );
var inverso = meses.reverse();
document.write( inverso );



// Orden Alfabetico
document.write( "<br /><br /><h2>Orden Alfabetico</h2>" );
var ordenAlfabetico = meses.sort();
document.write( ordenAlfabetico );
