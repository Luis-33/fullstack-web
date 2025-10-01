'use strict'
// programa que pida dos numeros y diga cual es el mayor y si son iguales y si no son numeros 
// si los numeros no son numeros o son menosres o iguales a 0 pedirlos de nuevo


do{
    var n1 = parseInt(prompt("Ingresa el primer numero:"));
    var n2 = parseInt(prompt("Ingresa el segundo numero:"));
    if (n1 > n2) {
        console.log(" el primer numero es mayor");
    } else if(n2> n1){
        console.log("el segundo numero es mayor");
    } else if(n1 == n2 || n2 == n1){
        console.log("Son iguales");
    }
}while(n1 < 1 || n2 < 1 || isNaN(n1) || isNaN(n2));