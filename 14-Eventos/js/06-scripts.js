//Los eventos se propagan como si fuera una burbuja
//Es cuando presionas en un evento, pero ese evento se propaga por muchos otros lugares dando resultados que no son los esperados

/*Con event bubbling al dar click en la parte de 'info', en el console log va a aparecer card e info,
Al dar click en 'titulo', en console log va a aparecer card, info y titulo,
*/

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    //Al igual que tenemos e.preventdefault para detener la acción por default, también existe stoppropagation
    //Esté va a detener la propagación del evento
    e.stopPropagation()
    console.log('click en card');
})

infoDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en info');
})

titulo.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click en titulo');
})
