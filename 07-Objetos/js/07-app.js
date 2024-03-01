
//Una variable con const no puede reasignarse su valor pero los objetos si se pueden reasignar
//Una variable al estar declarada como "const" al esta en un objeto sus propiedades si se puede reescribir o eliminar
const producto7 = {
    /*Propiedad o llave del objeto*/ /*Valor*/
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

producto7.disponible = false;


console.log(producto7);