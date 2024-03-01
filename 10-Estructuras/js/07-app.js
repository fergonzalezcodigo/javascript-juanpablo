//El operador OR va a revisar que se cumpla una o la otra condicion
//mientras que AND revisa porque todas se cumplan

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if(efectivo>totalPagar || credito > totalPagar || disponible > totalPagar){
console.log("Si podemos pagar");
} else {
console.log("Fondos insuficientes");
}