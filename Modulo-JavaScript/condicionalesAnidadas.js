'use strict'
// Condicional simple
let numero = 201;
if (numero % 2 === 0) {
    if (numero <= 100) {
        console.log('El numero: ' + numero + ' es par y es menor que o igual a 100');
    }
} else {
    if ((numero > 100) && (numero < 200)) {
        console.log("El numero: " + numero + " es impar y es mayor que 100 y menor que 200");
    } else {
        console.log("El numero es impar " + numero + " Mayor o igual que 200");
    }

}