const producto3 = {
    /*Propiedad o llave del objeto*/ /*Valor*/
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//Agregar por fuera nuevas propiedades al objeto
producto3.imagen = "imagen.jgp";

//Eliminar propiedades del objeto
delete producto3.precio;

console.log(producto3);


/*
const producto = {
nombre: "Monitor de 40 pulgadas,
precio: 300,
disponible: true
}
//Agregar una propiedad depués de la ejecución
producto.imagen = "imagen.jpg";
console.log(producto);

//Eliminar propiedades del objeto
delete producto.disponible;
console.log(producto);
 */