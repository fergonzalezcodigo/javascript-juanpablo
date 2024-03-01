(01)
//Las estructuras de control nos permitian ejecutar el codigo en caso de que una condicion se cumpla o no
//En el caso de los iteradores el codigo se va a ejecutar hasta que una condicion se cumpla o se deje de cumplir

//Comienzas agregar al carrito de compras y despues ves el carrito, el codigo que muestra el carrito se va a ejecutar hasta llegar al final del arreglo del carrito
//Si quieres ver los comentarios de facebook, esos comentarios se van a mostrar hasta que ya no haya

//Forloop
//Se ejecuta hasta que el código deja de cumplir una condición

//Consta de tres partes
//Primero es el Inicializador (en que lugar va a empezar a contar o repetirse el código (let i = 0)
//Segundoo es la Condicion que vamos a revisar ( i < 10)
//Tercera parte es el Incremento (i++)

/*
for(let i = 0; i < 10; i++){
console.log(`Numero: ${i}`)
}

for(let i = 0; i <= 10; i+=2){
console.log(`Numero: ${i}`)
}

///!!!PREGUNTA DE ENTREVISTA (En un forloop como identificas los numeros que sean pares y nones)
for(let i = 1; i <=20; i++){
if(i % 2 === 0){
console.log(`El número ${i} es par`);
}else{
console.log(`El número ${i} es impar`);
}
}
*/

const carrito = [
{nombre: 'monitor 28 pulgadas', precio: 1200},
{nombre: 'teclado', precio: 50},
{nombre: 'mouse', precio: 30},
{nombre: 'audifonos', precio: 140},
{nombre: 'tablet', precio: 2500},
{nombre: 'celular', precio: 4000},
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
//console.log(carrito[i];
console.log(carrito[i].nombre);
}