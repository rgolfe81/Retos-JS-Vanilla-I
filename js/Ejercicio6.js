// Lee un número por teclado que pida el precio de un producto (puede tener 
// decimales) y calcule el precio final con IVA. El IVA sera una constante que sera 
// del 21%

let numero = parseInt(prompt("Introduce un número"));
const iva = 0.21;
let importe = (numero*iva) + numero;

console.log ("El precio total son "+importe+"€");