//Diferencia entre declarativa e imperativa
//declarativa utiliza push y unshift
//Imperativa modifica el elemento actual, declarativa no
//Estaremos viendo la forma imperativa

const carrito = [];

const producto = {
nombre: "Monitor de 32 pulgadas",
precio: 400
}
const producto2 = {
nombre: 'Celular',
precio: 800
}
const producto3 = {
nombre: 'Teclado',
precio: 50
}
const producto4 = {
nombre: 'Mouse',
precio: 30
}
console.table(carrito);

/*
//Eliminar ultimo elemento de un arreglo
carrito.pop();
console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);
*/

//Eliminar de medias
//splice toma dos parametros, el primero es la posición donde va a iniciar a cortar, el segundo cuantos elementos quieres eliminar llegando a ese elemento
carrito.splice(1,2);
console.table(carrito);