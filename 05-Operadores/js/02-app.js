//Comprar numeros
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si 2 numeros son iguales
//Solamente se fija en el valor
console.log(numero1 == numero3);
console.log(numero1 == numero2);

//Comparador estricto
//Se fija en el valor y en el tipo de dato
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));
console.log(typeof numero1);
console.log(typeof numero2);

//Diferente
const password1 = "admin"
const password2 = "Admin"

console.log(password1 != password2);
console.log(numero1 !== numero2);
console.log(numero1 !== parseInt(numero2));