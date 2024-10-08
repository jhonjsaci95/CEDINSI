'use strict'

//Variables

let litros = prompt("Ingresa Los Litro a Convertir")
let centilitros = litros * 100;
let decilitros = litros * 10;
let galones = litros * 0.264172;
let onzas = litros * 33.814;


// Conversión
// centilitros = litros * 100            // 1 litro = 100 centilitros
// decilitros = litros * 10              // 1 litro = 10 decilitros
// galones = litros * 0.264172           // 1 litro ≈ 0.264172 galones
// onzas = litros * 33.814               // 1 litro ≈ 33.814 onzas

// Mostrar resultados
console.log(`${litros} Litro/s Equivalen a ${centilitros} centilitros`);
console.log(`${litros} Litro/s Equivalen a ${decilitros} Decilitros`);
console.log(`${litros} Litro/s Equivalen a ${galones} Galones`);
console.log(`${litros} Litros Equivalen a ${onzas} Onzas`);