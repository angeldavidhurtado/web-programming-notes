// list.includes
// collection.contains

// --- --- --- Crear Caja --- --- ---

var nuevaCaja1 = document.createElement("div"); // Crea elemento
var nuevoTexto1 = document.createTextNode("Nueva Caja 1"); // crea nodo de texto
nuevaCaja1.appendChild( nuevoTexto1 ); // Agrega un elemto hijo

var nuevaCaja2 = document.createElement("div"); // Crea elemento
var nuevoTexto2 = document.createTextNode("Nueva Caja 2"); // crea nodo de texto
nuevaCaja2.appendChild( nuevoTexto2 ); // Agrega un elemto hijo

var nuevaCaja3 = document.createElement("div"); // Crea elemento
var nuevoTexto3 = document.createTextNode("Nueva Caja 3"); // crea nodo de texto
nuevaCaja3.appendChild( nuevoTexto3 ); // Agrega un elemto hijo



// --- --- --- Agregar Atributos --- --- ---

nuevaCaja1.setAttribute('class', 'caja naranja');
nuevaCaja2.className = "caja verde";
nuevaCaja3.className = "caja rojo";

/*
$search.classList.toggle('a')
$search.classList.add('j')
*/

nuevaCaja1.setAttribute('id', 'cajaCreada1');
nuevaCaja2.id = "cajaCreada2";



var cajas = document.getElementsByClassName("caja");
var padre = cajas[0].parentNode; // obtiene el elemento padre

padre.appendChild( nuevaCaja1 );
padre.insertBefore(nuevaCaja2, cajas[1])
padre.replaceChild(nuevaCaja3, cajas[0])

padre.removeChild(cajas[3])

// --- --- --- Eliminar --- --- ---
padre.remove()
