//!!!!! PREGUNTA DE ENTREVISTA
/*
JS se ejecuta en dos vueltas
La primer vuelta se le conoce como 'etapa de creación':
Escanea el documento, registra las funciones y determina que variables va a crear
La segunda vuelta es la 'etapa de ejecución':
Manda a llamar la función y como ya está registrada va a mostrar el resultado
*/

//Declaración de función
sumar();
function sumar() {
    console.log(2+2);
}


//Expresión de función
sumar2();
const sumar2 = function() {
    console.log(3+3);
}