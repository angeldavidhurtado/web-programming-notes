var persona1 = {
    nombre: "Ángel",
    edad: 21,
    pais: "Colombia",
    saludar: function(){
        document.write( persona1.nombre );
    }
}

var persona2 = {
    nombre: "Sara",
    edad: 17,
    pais: "Venezuela",
    saludar: function(){
        document.write( persona2.nombre );
    }
}

var persona = {
    nombre: "Nombre",
    edad: 20,
    pais: "Mundo",
    saludar: function(){
        document.write( this.nombre );
    }
}

persona1.saludar();
document.write("<br />");
persona2.saludar();
document.write("<br />");
persona.saludar();



// --- --- ---



function Persona(nombre, edad, pais) {
    this.nombre = nombre;
    this.edad = edad;
    this.pais = pais;

    this.saludar = function() {
        alert( "Hola, soy " + this.nombre + " tengo " + this.edad + " años de edad y soy de " + this.pais );
    }
}

var Persona1 = new Persona("Ángel", 20, "Colombia");
Persona1.saludar();

var Persona2 = new Persona("Sara", 17, "Venezuela");
Persona2.saludar();



// --- --- ---



class OtraPersona {
    constructor(nombre, edad, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }

    saludar() {
        console.log( "Hola, soy " + this.nombre + " tengo " + this.edad + " años de edad y soy de " + this.pais );
    }
}


var otraPersona1 = new OtraPersona("Ángel", 21, "Colombia");
otraPersona1.saludar();

var otraPersona2 = new OtraPersona("Sara", 17, "Venezuela");
otraPersona2.saludar();



// --- --- ---



function crearPersona( nombre, edad, pais ) {
    var personaFuncion = {
        nombre: nombre,
        edad: edad,
        pais: pais,
        saludar: function() {
            console.log( "Hola, soy " + this.nombre + " tengo " + this.edad + " años de edad y soy de " + this.pais );
        }
    }

    return personaFuncion;
}

var personaA = crearPersona("Liliana", 23, "Chile");
var personaB = crearPersona("Eduardo", 30, "España");

console.log( "." );
console.log( "." );
personaA.saludar();
personaB.saludar();
