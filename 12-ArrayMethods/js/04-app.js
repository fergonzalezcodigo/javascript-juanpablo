//Filter va a crearte un nuevo arreglo basado en el parametro que es evaluado
const carrito = [
    {nombre: 'monitor 28 pulgadas', precio: 1200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'mouse', precio: 50},
    {nombre: 'audifonos', precio: 140},
    {nombre: 'tablet', precio: 2500},
    {nombre: 'celular', precio: 4000},
]

//Traernos todos los productos que cuesten más de 400
let resultado;
resultado = carrito.filter( producto => producto.precio > 400);
//Va a iterar todo el arreglo y va a asignarle a "resultado" todos los productos que son mayores a 400
//Utilizando estos array methods que hacen los buscadores como en AR&B

//Traer todos excepto los audifonos
//Buena forma de utilizar filter puede ser para quitar un elemento del carrito de compras
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos');
//En filter asignale todos los productos que no sean audifonos


//Si quieres solo los audifonos
resultado = carrito.filter(producto => producto.nombre === 'Audifonos');

console.log(resultado);