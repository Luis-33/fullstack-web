'use strict'
// una funcion es un bloque de código el cual realiza una tarea en especifico y puede ser reutilizable

// function saludo() {
//     return "hola soy una funcion";
// }

// console.log(saludo());

function calculadora(num1, num2, mostrar = false){ // Cuando le asignamos un valor a la variable en la funcion, no será necesario mandarsela al momento de llamarla
    if (mostrar== false) { // si mostrar es falso la manda por consola 
        console.log("la suma es", num1+num2);
        
    }else{ // si mostrar es verdadera la muestra en el html
        document.write("la suma es", " ", num1+num2);
        
    }
}
var x = confirm("elige si lo muestro en pantalla o consola")
if (x) {
    calculadora(2,2,true);
}else{
    calculadora(2,2);

}