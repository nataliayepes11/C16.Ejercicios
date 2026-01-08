/* Calcula el total de ventas de productos seleccionados 
Supón que tienes una lista de productos con sus precios en formato de objeto:
const products = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
];
Queremos:
o Seleccionar los productos cuyo precio sea mayor o igual a 50.
o Obtener solo los nombres de esos productos.
o Calcular el precio total sumando los precios de los productos seleccionados.
o Imprime el total y los nombres de los productos seleccionados en la consola.
*/

const products = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
];

//1)
let mayorA50 = products.filter(function (producto){
    return producto.price >=50;
});
console.log("Los productos mayor o igual a 50 son: ", mayorA50); // Lo pongo para controlar que voy bien.

//2)
let nombresProductos = mayorA50.map(function(producto){
    return producto.name;
});
console.log("Los productos seleccionados son: " + nombresProductos); // Sólo para chequeo personal esta línea.

//3)
let precioTotalProdSelec = mayorA50.reduce(function(acumulador, producto){
    return acumulador + producto.price; 
}, 0);
console.log("Los productos seleccionados suman: $" + precioTotalProdSelec); // Es para mí esta línea.

//4) El ejercicio sólo pide que salga por la terminal esta info...
console.log("Productos seleccionados: " + nombresProductos.join(", "));
console.log("Valor total: $" + precioTotalProdSelec);