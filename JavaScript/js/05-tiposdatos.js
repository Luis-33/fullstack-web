'use strict'

/* BOLEANO: verdaddero o falso
 NULL: sin valor
 UNDEFINED: variable sin asignar
 NUMBER: numero
 BigInt: numero mas grande
 Sring: texto o cadena
 Objeto: funicion o colección de datos*/

 var numero= 44;
 var cadena= "hola";
 var boleano = false;
 var nulo = null;
 var indefinido= undefined;

 // saber el tipo de dato

 console.log(typeof(cadena));
// convertir string a entero
var numero_falso = "25.5";
var numero = Number(numero_falso)

console.log("numero_falso = ",numero_falso,"es una variable de tipo", typeof(numero_falso));
console.log("entero = ",numero," es una variable de tipo",typeof(numero));
// tambien se puede convertir con parseint o parsefloat
console.log("sting convertido en int",parseInt(numero_falso));
console.log("sting convertido en float ",parseFloat(numero_falso));

