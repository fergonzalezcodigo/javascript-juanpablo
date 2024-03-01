//Crear objetos dentro de un objeto


const producto5 = {
    /*Propiedad o llave del objeto*/ /*Valor*/
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        medidas : {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion : {
            pais: "China"
        }
    }
}

/*
console.log(producto5);
console.log(producto5.informacion);
console.log(producto5.informacion.peso);
*/

console.log(producto5.informacion.fabricacion.pais);

/*
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: '1k',
        medida: '1m'
    }
}

//Se accede con la sintaxis de punto
console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.peso);

const animal = {
    nombre: "Cheems",
    edad: 3,
    disponible: true,
        informacion:{
            medidas:{
                peso: '2kg',
                medida: '1m'
            },
            origen: {
                pais: 'China'
            }
        }
}

console.log(animal.informacion.origen.pais);
*/