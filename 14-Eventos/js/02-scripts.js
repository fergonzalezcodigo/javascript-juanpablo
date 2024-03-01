//Eventos con el  mouse

const nav = document.querySelector('.navegacion');

//Registrar un evento
//Primero tenemos un selector y después le vamos a registrar un evento
//Siempre van a ser de esa forma todos los eventos
//Este va a ejecutar una función anonima (es decir, no tiene nombre) pero también podemos deinifr otra función en la parte inferior

/* nav.addEventListener('click', () => {
    console.log('click en nav');
}) */

/* nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegacion');
}) */

/* nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
}) */

//Puedes tener multiples evenlistener
/* nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseenter', () => {
    console.log('entrando en la navegacion');

    nav.style.backgroundColor = 'green';
})  */

/* nav.addEventListener('mousedown', () => { //Es similar a un 'click'
    console.log('entrando a la navegacion');
}) */

/* nav.addEventListener('mouseup', () => { //Se ejecuta cuando doy click, pero suelto el mouse
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'green';
}) */

//Cuando abres un archivo en tu computadora tienes que darle dobleclick
nav.addEventListener('dblclick', () => { //Se ejecuta cuando doy click, pero suelto el mouse
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'green';
})