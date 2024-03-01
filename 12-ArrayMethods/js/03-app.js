//Reduce
//Tomar una gran cantidad de datos, unirlos y entregar un resultado

const carrito = [
    {nombre: 'monitor 28 pulgadas', precio: 1200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'mouse', precio: 50},
    {nombre: 'audifonos', precio: 140},
    {nombre: 'tablet', precio: 2500},
    {nombre: 'celular', precio: 4000},
]
    
    //Con un foreach sería de esta forma
    let total = 0;
    carrito.forEach ( producto => total += producto.precio)
    console.log(total);
    
    //forma de hacerlo con el array method Reduce
    //Se le pasan dos valores
    //Primero es el valor anterior (valor previo) y el segundo el valor actual (valor actual)
    //Despues de la coma es el valor sobre el cual inicia
    let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
    console.log(resultado);