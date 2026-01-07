/* Ejercicio 4: Calcula la suma total de los números
Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de sumarlos todos juntos. 
Es decir, deberías obtener 1 + 2 + 3 + 4. Al fi nalizar, imprime el total en la consola.
*/

let lista = [1, 2, 3, 4];

let suma = lista.reduce(function(acumulador, numero){
    return acumulador + numero;
});

console.log("Los números del array suman: " + suma);
