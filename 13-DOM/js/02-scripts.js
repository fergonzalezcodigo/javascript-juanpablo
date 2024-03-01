//Seleccionar elementos por su clase
//Siempre hacemos referencia al document, todos los selectores inician con document
const header = document.getElementsByClassName('header'); //Nos va a permitir seleccionar elementos que tengan un nombre de una clase
//Colocarles las clases como las tienes definidas en el HTML
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Si las clases existen más de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);
//getElementsByClassName como selecciona clases te puede traer multiples elementos porque las clases
//se pueden utilizar más de una vez en el HTML


//Su una clase no existe
const noExiste = document.getElementsByClassName('noExiste');
console.log(noExiste);

