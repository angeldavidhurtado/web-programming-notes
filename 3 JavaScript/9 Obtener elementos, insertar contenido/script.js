// https://www.lawebdelprogramador.com/codigo/JavaScript/2459-Obtener-los-valores-de-un-formulario-que-esta-incluido-en-un-iframe.html

var divs = document.getElementsByTagName('div');
console.log( divs );

var clases = document.getElementsByClassName('caja');
console.log( clases );

var primer1 = document.getElementById('caja1');
console.log( caja1 );

divs[0].textContent = "texto";
clases[1].innerHTML = "<h2>h2</h2>";
