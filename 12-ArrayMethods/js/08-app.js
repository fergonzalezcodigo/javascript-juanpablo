const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    {nombre: 'monitor 28 pulgadas', precio: 120},
    {nombre: 'teclado', precio: 50},
    {nombre: 'mouse', precio: 50},
    {nombre: 'audifonos', precio: 140},
    {nombre: 'tablet', precio: 250},
    {nombre: 'celular', precio: 780},
];


//Agregar un elemento (Agosto) al final del arreglo

//Este modifica el arreglo original
//Porque se esta modificando y luego asignando
meses.push('Agosto');
console.log(meses);


//Spread operator en un arreglo con indices

//Esta forma no modifica el arreglo original
//Esta es una de las bases de la Programacion Funcional
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

//Spread operator en un arreglo con objetos
const producto = {nombre: 'Disco duro', precio: 300};
const carrito2 = [...carrito, producto];
console.log(carrito2);