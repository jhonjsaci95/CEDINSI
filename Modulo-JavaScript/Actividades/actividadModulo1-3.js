'use strict'
//variables
let selecion = prompt('Escoge la Opción que deseas :' + "\n1 para Centigrados \n 2 para Fahrenheit");

if ((selecion > 0) && (selecion < 2)) {
    let centigrados = prompt("Digita los grados Centigrados: ");
    let fahrenheit = (centigrados * 9 / 5) + 32;
    alert("Conversión de Centigrados a Fahrenheit " + fahrenheit);
    console.log(fahrenheit)
} else {
    if ((selecion > 1) && (selecion = 2)) {
        let fahrenheit = prompt("Digita los grados Fahrenheit: ");
        let centigrados = (fahrenheit - 32) * 5 / 9;
        alert("Conversión de Fahrenheita Centigrados" + centigrados);
        console.log(centigrados)
    } else {
        alert('Opcion no es valida');
    }
}

