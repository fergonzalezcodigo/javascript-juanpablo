//Aunque en sintaxis es bastante similares, for of itera sobre arreglos y for in sobre objetos
const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
    }
    //Itera las llaves (parte izquierda)
    for (let propiedad in automovil){
    console.log(propiedad)
    }
    //Itera los valores (parte derecha)
    for (let propiedad in automovil){
    console.log(`${automovil[propiedad]}`)
    }
    
    //ecmascript 7 agregaron un iterador para objetos más sencillo
    for(let [llave,valor] of Object.entries(automovil)){
    console.log(valor)
    }