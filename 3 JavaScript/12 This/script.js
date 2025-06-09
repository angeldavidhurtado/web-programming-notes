var cajas = document.getElementsByClassName("caja");

var anterior = [];

function saludar() {
    // this hace referencia al último elemento que tubo un evento
    this.classList.toggle("naranja");
}

var longitud = cajas.length;
for (var i = 0; i < longitud; i++)
    cajas[i].addEventListener("mouseenter", saludar);
