const producto6 = {
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

//Destructuring de objetos anidados
const {nombre, informacion: {fabricacion : {pais} } } = producto6;
console.log(nombre);
console.log(pais);



/*
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

//Los dos puntos de origen: es para elegir a cual queremos acceder
//Para crear la variable de informacion no debe llevar dos puntos
//Aunque estoy accediendo a informacion: estoy creando la variable de origen
//Si quiero acceder al pais seria con dos puntos en origen:
//Si quiere acceder solo a origen no debe llevar los dos puntos

const {nombre, informacion, informacion:{origen, origen:{pais}}} = animal;
console.log(nombre);
console.log(informacion);
console.log(origen);
console.log(pais);
*/