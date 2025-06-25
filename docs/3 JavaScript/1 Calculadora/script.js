var numero1 = document.getElementById( 'numero1' );
var numero2 = document.getElementById( 'numero2' );
var resultado = document.getElementById( 'resultado' );

function suma() {
    var a = parseFloat( numero1.value );
    var b = parseFloat( numero2.value );

    var resultadoSuma = a + b;
    resultado.value = resultadoSuma;
}
