const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
//Eventos = botón va a esperar a que suceda algo en la pantalla y una vez que suceda va a reaccionar
//Eventos con un metodo llamado addEventListener


//Primer argumento será 'click'
//Arrow function será una función anonima
/*
btnFlotante.addEventListener('click', () =>{
    console.log("Diste click en el botón")
});
*/

/*
//addEventListener ya sabe que debe buscar una función y por eso no es necesario el parentesis
btnFlotante.addEventListener('click', mostrarOcultarFooter);

//También se puede crear una fincion
function mostrarOcultarFooter(){
    console.log('Click con funcion');
}
*/

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        //Recordar. this es una forma de acceder a las mismas propiedades de un objeto en los metodos
        //Pero también cuando das click y ejecuta una función hace referencia a lo que mando a llamar eas funcion
        //btnFlotante.classList.remove('activo'); quitar este
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        //btnFlotante.classList.add('activo'); quitar este
        this.classList.add('activo');
        this.textContent = 'X Cerrar';

    }
    console.log(footer.classList);
}