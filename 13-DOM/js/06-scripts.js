
/*
const encabezado = document.querySelector('.contenido-hero h1');

console.log(encabezado.innerText);  //Si en el CSS - visibility; hidden; no lo va a encontrar
console.log(encabezado.textContent); //Si lo va a encontrar aunque haya visibility
console.log(encabezado.innerHTML); //se trae el HTML
*/

//Cuando escribes este tipo de selectores (los de arriba) también puedes aplicar el channing o encadenamiento

const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);


//Interacciones sobre el DOM

//Puedes cambiar el texto de esta forma
document.querySelector('.contenido-hero h1').textContent = 'Hola';

//También cambiar el texto de esta forma
const nuevoHeading = 'Adiós'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

//Cambiar una imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';