//Las funciones son una serie de procedimientos o instrucciones. Van a realizar una accion
//Permiten tener un código más ordenado y fácil de mantener, también son reutilizables
//Existen dos formas de crear funciones en JS, una se conoce como 'declaración de función' y la otra como 'expresión de funsión'

//Declaración de función
//En los parentesis se colocan los 'parametros de la función'
//Lo que está adentro de las llaves se le conoce como 'cuerpo de la función'
function sumar() {
    console.log(2+2);
}

sumar();

//Expresión de función
//!!!PREGUNTA DE ENTREVISTA (¿cuál es la diferencia entre declaración y expresión?)
//Expresion es similar a crear una variable
const sumar2 = function() {
    console.log(3+3);
}
sumar2();