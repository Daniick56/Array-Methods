// CREAR:

let frutas = ["Manzana", "Banano", "papaya", "melocoton"];
// console.log(frutas.length);
// $4


// ACCEDER:

// para acceder al primer elemento de un array:
// let primero = frutas[0];
// $banano

// para acceder a el ultimo elemento de un array
// let ultimo = frutas[frutas.length-1];
// $manzana


// AÑADIR:

// Añadir un elemento al final de un array y guardar el numero de la longitud a una variable.
// let nuevaLongitud = frutas.push("naranja");
// console.log(nuevaLongitud, frutas[2]);
// $3 naranja


// Añadir un elemento al incio de un array y se guarda la longitud en una variable.
// let addPrincipio = frutas.unshift("fresas");
//console.log(addPrincipio, frutas[0]);
// $4 fresas


// ELIMINAR:

// eliminar el ultimo elemento de un array y a la vez guardarlo en una variable
// let deleteUltimo = frutas.pop();
// console.log(deleteUltimo, frutas[2]);
// $naranja undefined


// eliminar el primer elemento de un array
// console.log(frutas[0]);
// let deletePrimero = frutas.shift();
// console.log(frutas[0]);
// $fresas
// $manzana

// eliminar un unico elemento segun su indice
// frutas.push("mandarina", "melocotón");
// let position = frutas.indexOf("mandarina");
// console.log(frutas.splice(position, 1));
// $["mandarina"]


// RECORRIENDO UN ARRAY

// BUCLE FOR:
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

// FOR EACH:
// frutas.forEach(function(fruta) {
//     console.log(fruta)
// });

// MAP:
// let nuevasFrutas = frutas.map(function(fruta) {
//     return fruta.toUpperCase();
// });
// console.log(nuevasFrutas);

// FILTER:
// let frutasConA = frutas.filter(function(fruta) {
//     return fruta.includes('a');
// });
// console.log(frutasConA);