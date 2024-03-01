"use strict"

const producto9 = {
    /*Propiedad o llave del objeto*/ /*Valor*/
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//Seal: sellar el objeto
//A diferencia de freeze, seal puede agregar ni eliminar propiedades pero si se puede modificar las existentes
//!!!PREGUNTA PARA TRABAJO: DIFERENCIA ENTRE FREEZE Y SEAL
Object.seal(producto9)
producto9.disponible = false;

console.log(producto9);

//Para saber si un objeto está sellado o no
console.log(Object.isSealed(producto9));