/*
const nombre = "Hola"; 
const precio = 20;
*/
const producto11 = {
    /*Propiedad o llave del objeto*/ /*Valor*/
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        /*this se refiere a los valores que existen en el mismo objeto porque si no en consola
        nos va a aparecer "Hola" y "20"
        Y ya no los va a buscar afuera*/
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

const producto22 = {
    /*Propiedad o llave del objeto*/ /*Valor*/
    nombre: "Tablet",
    precio: 700,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}
producto11.mostrarInfo();
producto22.mostrarInfo();