const usuario = true;
const puedePagar = true;

//Revisa que se cumplan las dos condiciones, si una no cumple va a caer automaticamente en el else
if(usuario && puedePagar){
console.log("Si tienes un usuario y también puedes pagar");

//Una forma de negar una condicion es con el signo de exclamacion al inicio
//Si no es usuario o si no puede pagar...
} else if(!usuario){
console.log("Inicia sesion o saca una cuenta");
} else if(!puedePagar){
console.log("Fondos insuficientes");
} else{
console.log("No puedes comprar");
}