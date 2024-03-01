//Destructuring con arreglos
//En los arreglos decides el nombre porque su valor está definido por la posicion y no puedes crear variables que tengan corchetes
const numeros = [10,20,30,40,50];
const [primeroa,segundoa,terceroa] = numeros;
console.log(tercero);
//Si solo quiero acceder a un numero en especifico, no voy a ponerle nada en sus valores
const [ , ,tercerob] = numeros;
//Queremos el primero y segundo valor, pero los ultimos elementos esten en su propio arreglo (todos los valores que no hayan sido parte del array destructuring)
const [primero, segundo, ...tercero] = numeros;
console.log(tercero);