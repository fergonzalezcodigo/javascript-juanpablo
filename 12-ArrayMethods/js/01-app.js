const meses = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio'];

const carrito = [
{nombre: 'monitor 28 pulgadas', precio: 1200},
{nombre: 'teclado', precio: 50},
{nombre: 'mouse', precio: 30},
{nombre: 'audifonos', precio: 140},
{nombre: 'tablet', precio: 2500},
{nombre: 'celular', precio: 4000},
]

//Revisar si un valor existe en el arreglo de meses
meses.forEach(mes =>{
if(mes === 'Enero'){
console.log('Enero si existe');
}
});

//Una forma de hacerlo es con un array methods (includes)
//Este array method nos va a retornar un valor
//includes funciona solamente con los que tienen un indice

const resultado = meses.includes('Enero');
console.log(resultado)

//En un arreglo de objetos se utiliza .some
//array method porque tenemos un arreglo y despues un punto seguido de la funcion
const existe1 = carrito.some( producto => {
return producto.nombre === 'Celular'
})
//Compactado
const existe2 = carrito.some(producto => producto.nombre === 'Monitor curvo');
console.log(existe2);

//En un arreglo tradicional con .some
const existe3 = meses.some( mes => mes === 'Febrero' );
console.log(existe3);

//some te soporta un arreglo de indices y arreglo de objetos
//includes solo soporta arreglo de indices (arreglo tradicional)