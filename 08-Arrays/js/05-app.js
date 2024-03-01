/*
//Ejemplos de metodos que existen en los arreglos
const meses = ['Enero','Febrero','Marzo'];

//Metodos del arreglo:
//Agregar al final del arreglo
meses.push('Abril');
meses.push('Mayo');
console.table(meses);
*/

//Los arreglos pueden tener objetos
const carrito = [];

//Definir un producto
const producto = {
nombre: "Monitor de 32 pulgadas",
precio: 400
}
const producto2 = {
nombre: 'Celular',
precio: 800
}

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
nombre: 'Teclado',
precio: 50
}

//Agregar al inicio
carrito.unshift(producto3);

console.table(carrito);