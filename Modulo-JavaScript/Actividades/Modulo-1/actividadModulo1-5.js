let sueldoGanado = prompt('Ingresa el Valor de su sueldo a consultar:');

let descpension1 = sueldoGanado * 2 / 100;
let descpension2 = sueldoGanado * 4 / 100;
let descpension3 = sueldoGanado * 6 / 100;
let auxTransporte = sueldoGanado * 6 / 100;
const subFamiliar = 12000;


if (sueldoGanado <= 699999) {
    let primerCondicion = sueldoGanado - descpension1 + auxTransporte;

    alert(`Su sueldo es: ${primerCondicion} \n desceuntos: ${descpension1} \n Auxilios: ${auxTransporte}`);

} else {
    if ((sueldoGanado >= 700000) && (sueldoGanado <= 999999)) {
        let segundaCondicion = sueldoGanado - descpension2 + subFamiliar;
        alert(`Su sueldo es: ${segundaCondicion} \n desceuntos: ${descpension2} \n Subsidios: ${subFamiliar}`);
    } else {
        let tercerCondicion = sueldoGanado - descpension3;
        alert(`Su sueldo es: ${tercerCondicion} \n desceuntos: ${descpension3}`);
    }

}

