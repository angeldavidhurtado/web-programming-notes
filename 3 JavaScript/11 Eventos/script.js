function saludo() {
    alert("Hola Mundo !!!");
}



var btnEstandar = document.getElementById("btnEstandar");

btnEstandar.addEventListener("mouseenter", saludo);

btnEstandar.addEventListener("click", function(){
    alert("Chao");
    btnEstandar.removeEventListener("mouseenter", saludo);
});

/*
click
focus
blur
change
onload
mouseover
mouseout
resize
submit
*/
