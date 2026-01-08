/* Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras
Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. 
Queremos saber cuántas letras hay en total entre todas las palabras. 
Por ejemplo, 'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.
*/ 

let universo = [`sol`, `luna`, `estrella`];

let cantidadDeLetras = universo.reduce(function(acumulador, string){
    return acumulador + string.length;
}, 0); // ponemnos CERO para que el acumulador inicie en 0.

console.log("El array tiene " + (cantidadDeLetras) + " letras");