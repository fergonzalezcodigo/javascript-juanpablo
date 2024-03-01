//Every
//Todos los elementos de un arreglo debe cumplir esa condición para que nos retorne un true
const carrito = [
    {nombre: 'monitor 28 pulgadas', precio: 120},
    {nombre: 'teclado', precio: 50},
    {nombre: 'mouse', precio: 50},
    {nombre: 'audifonos', precio: 140},
    {nombre: 'tablet', precio: 250},
    {nombre: 'celular', precio: 780},
];

const resultado = carrito.every(producto => producto.precio < 500);
console.log(resultado);

//Si quieres revisar que al menos uno cumpla la condicion se debe hacer con .some
const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2);