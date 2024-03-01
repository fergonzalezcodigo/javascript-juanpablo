//En JS no sé utiliza tanto for, while y do while
//forEach es ideal para recorrer arreglos, va a ejecutarse almenos una vez por cada vez que haya elementos en el arreglo
//Es decir si en el arreglo hay 20 elementos, se va a ejecutar 20 veces, si hay 10 elementos se va a ejecutar 10 veces

const pendientes = ['Tarea','Comer','Proyecto','Estudiar JS'];

//En el parentesis se pasaria como argumento cada elemento que vamos iterando en el arreglo, es decir toma todo el arreglo y comienza a recorrer cada uno
pendientes.forEach( (pendiente) => {
console.log(pendiente)
})
//Si solamente es una linea se puede compactar
pendientes.forEach ( pendiente  => console.log(pendiente))
//Se puede hacer un arreglo con indices
pendientes.forEach ( (pendiente, indice) =>{
console.log(`${indice} : ${pendiente}`)
})

//arreglo con objetos
const carrito = [
{nombre: 'monitor 28 pulgadas', precio: 1200},
{nombre: 'teclado', precio: 50},
{nombre: 'mouse', precio: 30},
{nombre: 'audifonos', precio: 140},
{nombre: 'tablet', precio: 2500},
{nombre: 'celular', precio: 4000},
]

carrito.forEach((prodcuto) => {
console.log(producto);
//Como es un objeto si quieres mostrar solo los nombres seria ponerle (producto.nombre)
})
//Compactando el forEach de carrito
carrito.forEach(producto => console.log(producto.nombre));

//Junto al foreach existe algo llamado map, la única diferencia es que map crea un arreglo nuevo
carrito.map(producto => console.log(producto.nombre));


//Como está usando un foreach no va a mostrar nada va a estar vacio
//Mientras con map va a ir llenando el arreglo (nuevoArreglo2) en cada iteracion
const nuevoArreglo = carrito.forEach(producto => producto.nombre);
const nuevoArreglo2 = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);