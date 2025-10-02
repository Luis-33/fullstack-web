'use strict'
// muestra los numerosdivisores de un numero ingresado en prompt

do {
    var numero = parseInt(prompt("Intresa un numro mayor a 0 ",1));
} while (numero==0);
for (let i = 0; i <= numero; i++) {
    if (numero % i == 0) {
        console.log("divisor", i);
    }    
}