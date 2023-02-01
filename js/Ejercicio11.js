// Crea una aplicación que nos pida un día de la semana y que nos diga si es un día 
// laboral o no. Usa un switch para ello.

let dia = prompt("Introduce un día de la semana").toLowerCase();

switch (dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("El día introducido es laboral");
        break;
    case "sabado":
    case "domingo":
        console.log("El día introducido no es laboral");
        break;
    default:
        console.log("El día introducido no es correcto");
}