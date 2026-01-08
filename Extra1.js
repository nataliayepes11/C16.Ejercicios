/* Encuentra los nombres más cortos y transforma su formato
Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']. 
Queremos realizar varias tareas con esta lista:
o Primero, filtra los nombres que tengan menos de 5 letras.
o Luego, transforma los nombres resultantes para que estén en mayúsculas.
o Finalmente, construye una frase que diga: "Los nombres seleccionados son: [nombres]", 
donde [nombres] sea la lista resultante unida por comas.
Al final, imprime la frase en la consola.
*/

let nombres = [`Lucía`, `Ana`, `María`, `Luis`, `José`, `Pablo`];

//1)
let nombresCortos = nombres.filter(function(nombre){
    return nombre.length < 5;    
});

console.log("Los nombres que tienen menos de 5 letras son: " + nombresCortos);

//2)
let nombresMayusculas = nombresCortos.map(function(nombre){
    return nombre.toLocaleUpperCase();
});

console.log("Los nomnres cortos en mayúsculas se verían así: " + nombresMayusculas);

//3)
let listadoFinal = "Los nombres seleccionados son: " + nombresMayusculas.join(", ");

console.log(listadoFinal);