//Funciones que retornan valores
//Ya vimos Funciones que toman parametros, ahora funciones que retornan valores
function sumar(a,b){
    return a + b;
}
//Cuando retoras algo debes tener otra variable donde se le asigne ese valor retornado
const resultado = sumar(2,3);

console.log(resultado);

//Ejemplo más avanzado
let total = 0;
function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuesto(total){
    return total * 1.15;
}
total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar}`);

console.log(total);
//Buen ejemplo de una función que retorna un valor. Estamos retornandole sobre el "total" porque más adelante
//vamos a hacer algo con ese valor
//De otra forma solo bastaría realizar una acción en esa función (como el de sumar)