function saludarTimeout() {
    alert( "Timeout: " + i );
    i++;
}

function saludarIntervalo() {
    alert( "Intervalo: " + u );
    u++;
}



// --- --- --- Timeout --- --- ---

var btnIniciarTimeout = document.getElementById("btn-iniciar-timeout");
var btnDetenerTimeout = document.getElementById("btn-detener-timeout");
var tiempo, i = 0;

btnIniciarTimeout.addEventListener("click", function(){
    tiempo = setTimeout(saludarTimeout, 3000);
    /*
    Ejecuta la funcion luego de 3000ms
    setTimeout retorna el indice de cola
    */
    console.log( tiempo );
});

btnDetenerTimeout.addEventListener("click", function(){
    clearTimeout(3);
    /*
    elimina la espera del inidice indicado
    podria usarse
    clearTimeout( tiempo );
    ya que tiempo tiene el último indice de la cola de ejecución
    */
});



// --- --- --- Interval --- --- ---

var btnIniciarInterval = document.getElementById("btn-iniciar-interval");
var btnDetenerInterval = document.getElementById("btn-detener-interval");
var intervalo, u = 0;

btnIniciarInterval.addEventListener("click", function(){
    intervalo = setInterval(saludarIntervalo, 3000);
    /*
    Ejecuta la funcion luego de 3000ms
    setTimeout retorna el indice de cola
    */
    console.log( intervalo );
});

btnDetenerInterval.addEventListener("click", function(){
    clearInterval( intervalo );
    /*
    elimina la espera del inidice indicado
    podria usarse
    clearTimeout( u );
    */
});
