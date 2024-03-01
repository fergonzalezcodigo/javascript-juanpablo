//Metodos para arreglos en los siguientes dos videos

const carrito = [
    {nombre: 'monitor 28 pulgadas', precio: 1200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'mouse', precio: 30},
    {nombre: 'audifonos', precio: 140},
    {nombre: 'tablet', precio: 2500},
    {nombre: 'celular', precio: 4000},
]
    
    for(let i = 0; i < carrito.length; i++){
    //Si quieres acceder al nombre
    console.log(carrito[i].nombre);
    }
    //Si quieres acceder al precio
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
    
    //JS tiene sus propios metodos para iterar sobre un arreglo, se les conoce como ARRAY METHODS
    //Utilizando un metodo llamado foreach
    //foreach va a iterando cada objeto y "producto" seria el conjunto de todos
    carrito.forEach (function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
    })