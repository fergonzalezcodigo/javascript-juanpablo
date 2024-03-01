//!!!PREGUNTAS DE TRABAJO (que hace break y continue)
//break va a cortar la ejecución de un forloop
//continue va a interceptar un elemento, identificarlo y continuar la ejecución


//!!!PREGUNTA DE TRABAJO (crea un forloop que al detectar el numero 5 detenga la ejecucion)
for(let i = 0; i <= 10; i++){
    if(i===5){
    console.log(`Este es el 5`);
    break;
    }
    console.log(`Numero: ${i}`);
    }
    
    for(let i = 0; i <= 10; i++){
    if(i===5){
    console.log("CINCO");
    continue;
    }
    console.log(`Numero: ${i}`);
    }
    
    //Decirle al usuario que uno de los productos tiene descuento
    const carrito = [
    {nombre: 'monitor 28 pulgadas', precio: 1200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'mouse', precio: 30, descuento: true},
    {nombre: 'audifonos', precio: 140},
    {nombre: 'tablet', precio: 2500},
    {nombre: 'celular', precio: 4000},
    ]
    for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
    console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
    continue;
    }
    console.log(carrito[i].nombre);
    }