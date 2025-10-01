'use strict'

//alertas
alert("esto es una alerta");
// confirmacion: muestra una ventana para acepter o cancelar
// confirm("estas seguro que quieres continuar");
// tambien puedes guardar la respuesta, se guarda como verdadero o falso
var resultado = confirm("confirma si o no ");
console.log(resultado);
// Ingresar datos 
// prompt siempre regresa un string
var result = prompt("escribe tu edad",25);
console.log(result);

// si necesitas que el valor se en entero, puedes convertirlo como acontinuacion
var resulint= parseInt(prompt("escribe un numero del 1 al 100",0));
console.log(resulint);
