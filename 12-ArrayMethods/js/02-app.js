//findindex
//Saber en que indice de nuestro arreglo se encuentra un elemento

const meses = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio'];

const carrito = [
{nombre: 'monitor 28 pulgadas', precio: 1200},
{nombre: 'teclado', precio: 50},
{nombre: 'mouse', precio: 50},
{nombre: 'audifonos', precio: 140},
{nombre: 'tablet', precio: 2500},
{nombre: 'celular', precio: 4000},
]

//Con un forEach seria de la siguiente forma
meses.forEach((mes,i) => {
if(mes === 'Abril'){
console.log(`Encontrado en el indice ${i}`)
}
})

//Encontrar el indice de abril con el metodo findIndex
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

//Encontrar un indice de un arreglo de objetos
//Si hay valores con el mismo precio solo se va a retornar el indice del primero que encuentra
const indice2 = carrito.findIndex(producto => producto.precio === 50);
console.log(indice2);
