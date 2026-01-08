/* Ejercicio 8: Busca un nombre específico
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. 
Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.
*/

let nombres = [`Carlos`, `Daniel`, `Laura`, `Ana`];

let laura = nombres.find(function(string){
    return string === "Laura";

});
console.log(laura);
