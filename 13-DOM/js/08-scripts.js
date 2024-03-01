//En JS todo está conectado al document, pero la forma que te vas a mover por los diferentes
//elementos se le conoce como "traversing the DOM", es decir, irlo recorriendo

//const navegacion = document.querySelector('.navegacion');

/* console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos (saltos de linea)
console.log(navegacion.children); //Va a listar unicamente elementos que sean reales
 */

/* console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType); */


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
const card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent);

card.children[1].children[1].textContent = "Nuevo heading desde traversing the DOM";

//Cambiar la imagen desde traversing
card.children[0].src = 'img/hacer2.jpg';
console.log(card.children[0]); 
*/


//Hemos estado utilizando children, es decir, selecciono el elemento Padre y con children accedo a sus Hijos
//Pero también te permite navegar desde el Hijo hacia el Padre
const card = document.querySelector('.card');
console.log(card.parentNode); //Tiene los espacios en blanco
console.log(card.parentElement); 

//Le puedes colocar otro parentElement siempre y cuando haya un Padre para recorrer
console.log(card.parentElement.parentElement); 



//Otra forma de hacer traversing the DOM
//También odemos seleccionar el siguiente elemento que es como su Hermano
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

//Forma de ir al elementro previo
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);


const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild); //traer el primero
console.log(navegacion.lastElementChild); //traer el ultimo