//Find
//Previamente vimos findindex pero solo nos decia el indice del elemento
//find va a crear un nuevo arreglo basado en la condición que estás revisando

const carrito = [
    {nombre: 'monitor 28 pulgadas', precio: 1200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'mouse', precio: 50},
    {nombre: 'audifonos', precio: 140},
    {nombre: 'tablet', precio: 2500},
    {nombre: 'celular', precio: 4000},
]

//Con foreach
let resultado = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'tablet'){
        resultado = carrito[index]
    }
});
console.log(resultado);


//Con find
//Importante, find solo va a retornar el primer elemento que cumpla la condicion
const resultado2 = carrito.find(producto => producto.nombre === 'tablet' );
console.log(resultado2);
//Si quieres traerte todos los que sean iguales es con filter