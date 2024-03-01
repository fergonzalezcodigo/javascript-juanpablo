//Map es un metodo que existe en los arreglos
const carrito = [
    {nombre: 'monitor 28 pulgadas', precio: 1200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'mouse', precio: 30},
    {nombre: 'audifonos', precio: 140},
    {nombre: 'tablet', precio: 2500},
    {nombre: 'celular', precio: 4000},
]
    //La diferencia entra map y foreach
    //map crea una variable con UN ARREGLO NUEVO
    carrito.map (function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
    })
    
    
    //Diferencias
    const nuevoArreglo = carrito.map (function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
    })
    
    const nuevoArreglo2 = carrito.forEach (function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
    })
    
    console.log(nuevoArreglo);
    console.log(nuevoArreglo2); //No va a tener algo