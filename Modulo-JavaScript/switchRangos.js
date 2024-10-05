'use strct'


/* 
* Determinar la calificación de un estudiante 
* según la siguiente escala de ponderación: 
0 - y - 2.9 la ponderación es Insuficiente.
.3.0 - y - 3.5 - ponderación es Regular.
.3.6 y 4.0 ponderación es Bien.
.4.1 y 4.5 Muy Bien.
4.6 y 5.0 - es Excelente
*
*/


let calificacion = 1.6;
let mensaje = "";
switch (true) {
    case calificacion >= 0 && calificacion <= 2.9:
        mensaje = `Insuficiente ${calificacion}`; //Template String
        break;
    case calificacion >= 3.0 && calificacion <= 3.5:
        mensaje = `Regular ${calificacion}`;
        break;
    case calificacion >= 3.6 && calificacion <= 4.0:
        mensaje = `Bien ${calificacion}`;
        break;
    case calificacion >= 4.1 && calificacion <= 4.5:
        mensaje = `Mut Bien ${calificacion}`;
        break;
    case calificacion >= 4.6 && calificacion <= 5.0:
        mensaje = `Excelente ${calificacion}`;
        break;

    default:
        mensaje = `Fuera del Rango de Calificación ${calificacion}`;
        break;

}
console.log(mensaje);