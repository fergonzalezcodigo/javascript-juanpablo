//Agregar elementos al inicio o final de un arreglo utilizando spread operator

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

//Las nuevas versiones se dieron diferentes funciones que hacen lo mismo
//Unas se les conoce como declarativa y las otras como formas imperativas
//La forma imperativa es como la del video anterior (05), Tenemos un carrito y sobre ese mismo carrito estamos agregando elementos al inicio y final. Esta forma modifica la variable original
//La forma declarativa no modifica la variable, se crea una nueva

let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
//Donde coloques el producto es donde se va a colocar, a diferencia de push y unshift
resultado = [producto3, ...resultado];

console.table(resultado);
