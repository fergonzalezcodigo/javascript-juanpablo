const producto10 = {
    /*Propiedad o llave del objeto*/ /*Valor*/
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

console.log(producto10);
console.log(medidas);


//Assign
//Unir ambos objetos y los va asignar a resultado
const resultado = Object.assign(producto10,medidas);
console.log(resultado);


//Spread operator o rest operator (es más utilizada esta)
//Los tres puntos sinifican "copia esta variable"
const resultado2 = {...producto10,...medidas}
console.log(resultado2);