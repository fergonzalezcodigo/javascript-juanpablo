//En twitter hay un contador de cuantas palabras hay llevas escritas
//Email nn validos, etc

const busqueda = document.querySelector('.busqueda');


//Se ejecuta cuando presionas una tecla
/* busqueda.addEventListener('keydown', () => {
    console.log('escribiendo...');
}) */

//Se ejecuta el evento cuando presionas, pero sueltas la tecla
/* busqueda.addEventListener('keyup', () => {
    console.log('escribiendo...');
}) */

 //Es muy común en la validación de formularios
 //Colocas en el input y cuando das click por fuera aparece "escribiendo"
/*  busqueda.addEventListener('blur', () => {
    console.log('escribiendo...');
}) */


//Seleccionas el texto y lo copias CTRL+C
/* busqueda.addEventListener('copy', () => {
    console.log('escribiendo...');
}) */

//Cuando pegas algo CTRL+V
/* busqueda.addEventListener('paste', () => {
    console.log('escribiendo...');
}) */

//Cuando cortas algo CTRL+X
/* busqueda.addEventListener('cut', () => {
    console.log('escribiendo...');
}) */

//Se ejecuta cuando estas escrbiendo, sueltas, cortas, pegas, realizas cualquiera de los eventos
//que vimos anteriormente salvo el blur
/* busqueda.addEventListener('input', () => {
    console.log('escribiendo...');
}) */





//Con evt y type te va a mostrar sobre que elemento estamos trabajando
/* busqueda.addEventListener('input', (evt) => {
    console.log(evt.type);
}) */

//nos va a decir que input en especifico sobre cual estamos escribiendo
/* busqueda.addEventListener('input', (evt) => {
    console.log(evt.target);
}) */

//Lo que el usuario está escribiendo
//Ideal para una busqueda de algún articulo
//Consultar un web service puedes leer lo que el usuario está escribiendo y enviarlo a un endpoint de una api
/* busqueda.addEventListener('input', (evt) => {
    console.log(evt.target.value);
}) */


//También una forma de validar (que el input contenga información)
busqueda.addEventListener('input', (evt) => {
    if(evt.target.value === ''){
        console.log("falló la validación");
    }
    console.log(e.target.value);
})