//La diferencia entre queryselector y queryselectorall
//queryselector retornaba el primer elemento y máximo uno, queryselectorall va a retornar todos los elementos  que cumplan la condición del selector

const card = document.querySelectorAll('.card');
console.log(card);
//retorna algo llamado "NodeList", es similar a un arreglo. En JS los elementos se les conoce como nodos


//Si un elemento no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste); //Va a retornar un nodeList vacio