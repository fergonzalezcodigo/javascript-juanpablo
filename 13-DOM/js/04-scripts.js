Me aparece diferente al del video

//queryselector actua similar a getelementbyid, va a retornar máximo un elemento
//pero tiene la caracteristica de que te permite seleccionar clases
//sintaxis similar a una hoja de estilos
//Query selector va a retornar máximo un elemento o ninguno en caso de que no lo encuentre


//Va a retornar el primero que encuentre
const card = document.querySelector('.card');
console.log(card);


//Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);


//Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//queryselector tambien permite seleccionar ID
//igualmente va a seleccionar el primer elemento que encuentre
const formulario = document.querySelector('#formulario');
console.log(formulario);

//seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);