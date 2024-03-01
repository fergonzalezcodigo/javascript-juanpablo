/* const enlace = document.createElement('a');

//Agregando el texto
enlace.textContent = 'Nuevo enlace';

//Agregando href
enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase') //crear una clase

enlace.onclick = miFuncion;


//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace); //Se mostrará al último


console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]); //Mostrarlo dónde queramos


function miFuncion(){
    alert("diste click");
} */


//Crear un card de forma dinámica
//Esto es similar a lo que harías una vez que utilices una API o una BD, vas a consumir esos datos
//de algun lugar y los vas a mostrar en el HTML

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');


//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = "Texto alternativo";

//Crear el card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la iamgen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

//Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
//contenedor.appendChild(card); //mostrarlo al final
contenedor.insertBefore(card, contenedor.children[0]);