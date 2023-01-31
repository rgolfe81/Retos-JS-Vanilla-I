// Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, 
// también debemos indicarlo.

let numero = parseInt(prompt("Introduce un número"));

if (numero %2===0){
    console.log("El número es par");
} else {
    console.log("El número es impar");
}