/*
Otra forma de obtener un formulario

var formulario = document.getElementsByName("formulario")[0];
console.log( formulario );

como es getElements en plural devuelve una lista, así sea de un elemento
*/

function validar(e) {
    console.log( "Nombre: " + nombre.value );
    console.log( "Mujer: " + sexo[0].checked );
    console.log( "Hombre: " + sexo[1].checked );
    console.log( "Terminos: " + terminos.checked );

    // Evita que se envié el formulario
    e.preventDefault();
}

var formulario = document.getElementById("formulario");
console.log( formulario );

var nombre = formulario.nombre;
var sexo = formulario.sexo;
var terminos = formulario.terminos;

formulario.addEventListener("submit", validar);
