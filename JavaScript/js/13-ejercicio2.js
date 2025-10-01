'use strict'
/*Utilizar un bucle para calcular la suma y la media d los numeros introducidos hasta introducir un numero negativo y ahi mostrar el ressultado*/
var cont =0;
var suma= 0;
var media=0;
do{
     var numero = parseInt(prompt("Introduce los numero a calcular",-1));
    if (numero < 0){
        var salir = -1;
    } else {
    suma = suma + numero;
    cont= cont +1;
        salir = 1;
    }
}while(salir > 0);
media = suma/cont;
console.log("La suma es",suma);
console.log("La media es ",media);


