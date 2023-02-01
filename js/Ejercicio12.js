// Escribe una aplicación con un String que contenga una contraseña cualquiera. 
// Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando 
// aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo 
// “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale, 
// aunque le queden intentos).

let i = 0;
let contraseña;
let contraseñaOk = false;

do {
    contraseña = prompt ("Introduce la contraseña");
    if (contraseña === "geekshubs"){
        console.log("Enhorabuena. La contraseña es correcta");
        contraseñaOk = true;
    }else{
        console.log("La contraseña es incorrecta");
    }
    i++;
}while (contraseñaOk === false && i<3);

