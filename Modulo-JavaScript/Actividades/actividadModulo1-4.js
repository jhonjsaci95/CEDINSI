'use strict'
//variable

let consumoGalones = prompt('Ingresa los galones comprados : ');
const precioCentilitro = 25;

//Conversiones

//Galones a litros
let c1onversionaLitros = consumoGalones * 3.78541;

//Litros a centilitros

let conversionaCentilitros = conversionaLitros * 100;

let valorPagar = conversionaCentilitros * precioCentilitro;

alert(`Su valor a pagar por:  ${consumoGalones} Galone/s \n es de: $${valorPagar}`);
