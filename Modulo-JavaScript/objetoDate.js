'sue strict'
// Metodos odjeto date

let miFecha = new Date();
console.log(miFecha);



//Retorna el día de la fecha especificada 
console.log("Día " + miFecha.getDate());
//Retorna el mes (numero) desde enero, siendo enero mes 0
console.log("Mes " + miFecha.getMonth());
//Retorna el día de la semana desde e domingo 
console.log("Dia de la Semana " + miFecha.getDay());
//Retorna la hora en formato 24 horas 
console.log("Hora: " + miFecha.getHours());
//Retorna el año con 4 digitos
console.log("Año con 4 digitos: " + miFecha.getFullYear());
//Pasando la fecha a String
console.log("Cadena Fecha: " + miFecha.toString());
//Contenido del objeto todos los metodos
console.log(Date);