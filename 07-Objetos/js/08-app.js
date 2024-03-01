"use strict";

const producto8 = {
    /*Propiedad o llave del objeto*/ /*Valor*/
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}


//Como hacer para que un objeto se comporte como una constante (no pueda ser modificado) (Ej 03)
//tenemos que poner "use strict" y una vez que lo habilitamos tenemos acceso a una serie de metodos para objetos (object metods)

//Freeze no va a permitir modificar las propiedades, agregar ni eliminar
Object.freeze( producto8 );

producto8.imagen = "imagen.jpg";

console.log(producto8);

//Como saber si un objeto está congelado o no (para que funcione hay que comentar la linea 17)
console.log(Object.isFrozen(producto8));