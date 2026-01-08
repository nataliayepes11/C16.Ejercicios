/* Encuentra la película más corta y analiza los títulos largos 
Supón que tienes una lista de películas con su duración en minutos:
const movies = [
{ title: 'El Señor de los Anillos', duration: 200 },
{ title: 'Inception', duration: 148 },
{ title: 'Matrix', duration: 136 },
{ title: 'Toy Story', duration: 81 },
{ title: 'Coco', duration: 105 }
];
Queremos:
o Imprime en la consola:
o La lista de títulos largos en minúsculas.
*/

const movies = [
{ title: 'El Señor de los Anillos', duration: 200 },
{ title: 'Inception', duration: 148 },
{ title: 'Matrix', duration: 136 },
{ title: 'Toy Story', duration: 81 },
{ title: 'Coco', duration: 105 }
];

//1) Encontrar la película más corta en duración.
//o Imprime en la consola: El título de la película más corta.
console.log("--- PELICULA DE MENOR DURACIÓN --- ") // "La prolijación" :P 
let peliMasCorta = movies.reduce(function(menor, pelicula) {
    return pelicula.duration < menor.duration ? pelicula : menor;
});  
console.log("La película más corta es: " + peliMasCorta.title + " que dura " + peliMasCorta.duration + " minutos.");

//2) De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres.
let moviesRestantes = movies.filter(function(pelicula){
    return pelicula !== peliMasCorta;
});

//console.log(moviesRestantes); // Para control mío esta línea.
console.log("--- PELICULAS CUYO TÍTULO TIENE MÁS DE 10 CARACTERES --- ") // "La prolijación" :P 
let titulosMasDe10 = moviesRestantes.filter(function(pelicula){
    return pelicula.title.length > 10;
}).map(function(pelicula){
    return pelicula.title;
});
console.log(titulosMasDe10);

//3) Crear una lista de los títulos largos en minúsculas.
// o Imprime en la consola: La lista de títulos largos en minúsculas.
console.log("--- PELICULAS EN MINÚSCULAS --- ") // "La prolijación" :P 
let titulosMinusculas = titulosMasDe10.map(function(titulo){
    return titulo.toLowerCase();
});
console.log(titulosMinusculas);

