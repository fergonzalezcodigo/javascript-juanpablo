//Un ejemplo de un arreglo sería para un carrito de compras
//Facebook muestra listado de amigos

//Agrupar elemento o elementos del mismo tipo
//Mientras un objeto será una variable que va agrupar la infomación de un elemento de un objeto
//un arreglo puede tener multiples elementos que sean iguales
//En objetos tiene llave y valor y en arreglos solo valores

const numeros = [10, 20, 30];

//Este usa parentesis porque estamos usando un constructor nuevo (no es tan común usar este)
const meses = new Array('Enero','Febrero','Marzo');

console.log(numeros);
//Los arreglos usan algo que se conocen como "indices" es decir, cual es la posición que tiene ese elemento en el arreglo
//Los arreglos inician en 0

//Mientras en un objeto es llave (izquierda) y valor (derecha) en un arreglo es
//posición y valor /Cuando se muestra el resultado en chrome developer tools/ (también conocido comoo posición en el arreglo)

//tampoco es obligatorio que sean elementos relacionados, pueden ser arreglos con diferentes datos
const deTodo = ["Hola", 10, true,"si", null,{nombre: 'Juan', trabajo: 'Programador'}];
console.log(deTodo);

//Un arreglo puede estar dentro de otro arreglo

const adentro = ["Hola", 10, true,"si", null,{nombre: 'Juan', trabajo: 'Programador'}, [1,2,3]];
console.log(adentro);
