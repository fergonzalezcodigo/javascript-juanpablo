const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
//Se va a ejecutar e imprimir la primera condición que se cumpla
//Else se va a ejecutar siempre que ninguna de las condiciones previas se cumpla
if(dinero >= totalAPagar){
console.log('Si podemos pagar');
}else if(tarjeta){
console.log("Si puedo pagar porque tengo la tarjeta");
} else{
console.log("Fondos insuficientes");
}