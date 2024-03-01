//Es similar al for pero una versión simplificada
//Te va a permitir recorrer un arreglo de forma fácil

//Arreglo tradicional
const pendientes = ['Tarea','Comer','Proyecto','Estudiar JS'];

//Arreglo con objetos
const carrito = [
{nombre: 'monitor 28 pulgadas', precio: 1200},
{nombre: 'teclado', precio: 50},
{nombre: 'mouse', precio: 30},
{nombre: 'audifonos', precio: 140},
{nombre: 'tablet', precio: 2500},
{nombre: 'celular', precio: 4000},
]

//Es como si les estuvieramos dando un alias a cada uno de ellos, va a ir iterando sobre el arreglo original y va a ir asignando pendiente a cada uno de ellos
for(let pendiente of pendientes){
console.log(pendiente);
}

for(let producto of carrito){
console.log(producto.precio);
}