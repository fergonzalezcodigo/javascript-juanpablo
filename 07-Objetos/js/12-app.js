//¿Cómo crear objetos con object constructor?

//Nuestros objetos utilizan object literal. Definir el objeto con el código
const producto12 = {
    /*Propiedad o llave del objeto*/ /*Valor*/
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Object constructor
//This los va almacenar los valores dentro del objeto y no los va a buscar por fuera
//Es más dinámico que el object literal pero se utiliza más el object literal
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Tablet", 500);
console.log(producto2);

const producto3 = new Producto("Celular", 200);
console.log(producto3);