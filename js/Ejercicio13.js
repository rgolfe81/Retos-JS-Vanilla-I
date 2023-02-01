// Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y 
// un signo aritmético (String), según este último se realizará la operación 
// correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
// Los signos aritméticos disponibles son:
// +: suma los dos operandos.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1º operando como base y 2º como exponente.
// %: módulo, resto de la división entre operando1 y operando2.

let num1 = parseInt(prompt("Introduce primer valor"));
let num2 = parseInt(prompt("Introduce segundo valor"));
let operacion = prompt("Introduce la operación a realizar");

switch (operacion){
    case "+":
        console.log("La suma es : ",num1+num2);
        break;
    case "-":
    console.log("La resta es : ",num1-num2);
    break;
    case "*":
        console.log("El producto es : ",num1*num2);
        break;
    case "/":
    console.log("La división es : ",num1/num2);
    break;
    case "^":
        console.log("La base ",num1," a la potencia ",num2," es ",num1**num2);
        break;
    case "%":
    console.log("El resto de la división es : ",num1%num2);
    break;
    default:
        console.log("La operación introducida no es correcta");
}