const producto4 = {
    /*Propiedad o llave del objeto*/ /*Valor*/
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//Asignar el valor a su propia variable
//const nombre = producto4.nombre
//console.log (nombre);


//Destructuring es la nueva forma de hacerlo
//Extrae el valor y crea la variable
const { nombre, precio } = producto4;
//const { precio } = producto4;
console.log(nombre);
console.log(precio);

/*
const producto = {
nombre: "Monitor de 40 pulgadas,
precio: 300,
disponible: true
}

//Asignar el valor a su propia variable (FORMA ANTERIOR)
//const nombre = producto.nombre;
//console.log(nombre);

//Desde ecmascript 6 existe Object destructuring (extraer del objeto y crear la variable en un mismo paso)
const {nombre} = producto;
console.log(nombre); (minuto me quedé 2:50)

//Se puede simplificar
const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);
*/