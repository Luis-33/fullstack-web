'use strict'

// condicional if
var edad = 11;
var nombre = 'adrian';
var yaer = 2024;

if (edad == 11) {
    console.log("la edad es 11");
    
    
}

// uso de la condicion estricta
var numero = 12
if (numero === '12') { // para que una condicion evalue estrictamente los valores es necesario agregar un "=" adicional
    console.log("pasa");
} else {
    console.log("no pasa");
    
}

var numero2 = 13
if (numero2 !== 12) { // tambien el usuo estricto funciona con el operador diferente de, solo se necesita agregar un "=" adicional
    console.log("pasa");
    
    
} else {
    console.log("no pasa");
    
}