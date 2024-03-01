//Un signo de igual es de asignacion, dos signos de igual es de comparacion
// != significa "diferente a"
const puntaje = 1000;
if(puntaje != 1000){
console.log('Si es diferente');
}
// Operador con 2 signos de igual no es tan estricto
// Operador con 3 signos de igual es estricto
// También existe el diferente estricto !==
const puntaje2 = 200;
if(puntaje === "200"){
console.log('Si es igual');
} else{
console.log("no es igual");
}