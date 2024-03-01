//Existen diferentes formas de evalular (if,switch y operador ternario)
const autenticado = true;
const puedePagar = false;
//El "?" seria como el IF y ":" como el ELSE
console.log(autenticado && puedePagar ? "Si está autenticado" : "No esta autenticado");
//Ternario anidado
console.log(autenticado ? puedePagar? "Si esta autenticado y puede pagar" : "Si autenticado pero no puede pagar" : "No no esta autenticado");