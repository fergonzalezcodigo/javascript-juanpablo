//Los eventos con el scroll van a suceder en la ventana global 'window'

/* window.addEventListener('scroll', () => {
    console.log('scrolling');
}) */

//Ver cuantos pixeles hemos recorrido con el scroll
/* window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;

    console.log(scrollPX);
}) */

//Ver como hacen una animación en una sección
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    //console.log(ubicacion);
    if(ubicacion.top < 100){
        console.log('El elemento ya está visible');
    }else{
        console.log('Aún no, da más scroll');
    }
})