const producto13 = {
    /*Propiedad o llave del objeto*/ /*Valor*/
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Metodos para objetos

console.log(Object.keys(producto13)); //Nos va a retornar un arreglo con los keys del objeto
                                        //Las llaves del objeto la vamos a obtener con keys
                                        //Retorna la parte de la izquierda del objeto

console.log(Object.values(producto13)); //Nos va a retornar los valores
                                        //Retorna la parte de la derecha del objeto (que son los valores)

console.log(Object.entries(producto13)); //Nos va a retorar todo en pares
                                        //