'use strict'
// funciones dentro de funciones (tambien llamadas como funciones recursivas)

// function calculadora(num1, num2, mostrar = false){
//     var resultado = num1+num2;
//     if (mostrar) {
//         pantalla(resultado);
//     }else{
//         consola(resultado);
//     }
// }
// function pantalla (resultado){
//     document.write(resultado);
// }
// function consola(resultado){
//     console.log(resultado);
// }
// calculadora(2,2,true);

/* Parametro REST: sirve para agrupar los argumentos restantes de una funcion en un arreglo se usa con "..." como a continuacion*/

function listadoDeAnimales(animal1, animal2,...resto){
    console.log("animal1", animal1);
    console.log("animal2", animal2);
    console.log("resto",resto);
}
// listadoDeAnimales("Elefante", "leon", "jirafa","rinoceronte","cocodrilo");

// operador Spread te sirve para mandar arrays a la funcion
 var animales = ["tigre","pantera"];
 listadoDeAnimales(...animales,"perro","Gato","loro");