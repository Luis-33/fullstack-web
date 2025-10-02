'use strict'
// Mostrar todos los numeros impares entre dos numeros introducidos por el usuario


var numero1 = parseInt(prompt("Introduce el primer numero"));
var numero2 = parseInt(prompt("Introduce el segundo numero"));

if (numero1 < numero2) {
    for ( numero1; numero1 <= numero2 ; numero1++) {
        if (numero1 % 2 ==0 ) {
        console.log(numero1,"es par");   
            
        } else{
            console.log(numero1,"no es par");   
        }
    }
}else if(numero1 == numero2){

     if (numero1 % 2 ==0 ) {
        console.log(numero1,"es par");   
            
        } else{
            console.log(numero1,"no es par");   
        }
        
}else {
    for ( numero1; numero1 >= numero2 ; numero1--) {
        if (numero1 % 2 ==0 ) {
        console.log(numero1,"es par");   
            
        } else{
            console.log(numero1,"no es par");   
        }

    }
}

