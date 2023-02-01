// Realiza una aplicación que nos pida un número de ventas a introducir, después 
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado. 
// Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo 
// que no.

let ventas = parseInt(prompt("Introduce número de ventas"));
let sumaImporte = 0;
let importe;

for (let i=1; i<=ventas; i++){
    importe = parseFloat(prompt("Introduce el valor de la venta nº "+i));
    sumaImporte += importe;
}
console.log("La suma de las ventas es : "+sumaImporte);