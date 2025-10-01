'use strict'

/* hacer un programa que muestre todos los numeros entre dos numeros introducidos poe el usuario*/

var numero1 = parseInt(prompt("Ingresa el primer numero",0));
var numero2 = parseInt(prompt("Ingresa el segundo numero",0));
if (numero1 < numero2) {
    for ( numero1; numero1 <= numero2 ; numero1++) {
        console.log(numero1);   
    }
}else if(numero1 == numero2){
    console.log(numero1);
}else {
    for ( numero1; numero1 >= numero2 ; numero1--) {
        console.log(numero1);   
    }
}