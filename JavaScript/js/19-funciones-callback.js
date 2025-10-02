'use strict'
/* Son funciones que se pasan como argumentos (parametros) 
a otras funciones no llevan nombre por esolo de anonimas y 
se ejecutan despues de que cierto proceso o tarea se complete*/

// son funciones como parametros
function sumame(numero1, numero2,sumaYmuestra,sumaPorDos,callBack) { // Recibirás como parametro otra funcion y la ejecutarás con los datos para que se muestre el resultado
    var suma = numero1 + numero2;
    sumaYmuestra(suma);
    sumaPorDos(suma);
    callBack();
    return suma; // retornamos el valor de la suma
}

// sumame(4,6, function(dato){// creas la funcion anonima y la pasas como parametro y utilizaras cuando se realize el calculo en la funcion anterior 
//     console.log("La suma es",dato);
// }, function(dato){
//     console.log("La suma por 2 es", (dato*2));
// });

// Una forma de simplificar las funciones anomimas es haciendo uso de las funciones flecha
var res=sumame(4,6, dato => {
    console.log("la suma es", dato);  
}, dato => {
    console.log("la suma por dos es", (dato * 2));
    
},() =>{ // forma de llamar a la funcion flecha sin parametro
    console.log("sin parametro");
    
});

console.log(res);
