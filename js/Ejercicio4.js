// Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá 
// por teclado (recuerda pasar de String a double con parseDouble). Usa la 
// constante PI.

let radio = parseInt(prompt("Introduce el valor del radio"));
const pi = 3.1415;
let area = pi*(radio**2);


console.log ("El área del círculo es "+area);


