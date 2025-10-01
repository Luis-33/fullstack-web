'use strict'

// la diferencia entre let y var es que var es una variable global que puedes llamar desde cualquier parte de tu código y let es una variable local
// la cual solo en el bloque en el que la estas llamado o creando la puedes usar, si tratas de llamarla fura del bloque no funcionaría

// prueba con var

var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(numero);// valor 50
    
}
console.log(numero); // valor 50

// la varialbe numero es accesible desde cualquier perte del código

// prueba con let

var texto = "variable texto en var"
console.log(texto);

if (true) {
    let texto = "variable texto en let imposible acceder fuera el if"
    console.log(texto);
}

console.log(texto);

