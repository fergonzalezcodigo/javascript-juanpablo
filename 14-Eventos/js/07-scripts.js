//Con Delegation también se puede detener el Event Bubbling

/*Se tiene solo un selector principal y de ahí utilizamos e.target para conocer a que elemento dimos click
agregamos funciones al codigo que se asocien a ese elemento*/

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    //console.log(e.target) //Con target para saber a que parte del card le estamos dando click
    //console.log(e.target.classList) //nos va a decir las clases de lo que estamos dando click
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo')
    }
    if(e.target.classList.contains('precio')){
        console.log('Diste click en precio')
    }
    if(e.target.classList.contains('card')){
        console.log('Diste click en card')
    }
});

///!!!ENTREVISTA, UTILIZAR DELEGATION O STOPPROPAGTION
//POR QUE SUCEDE LA PROPAGACIÓN Y COMO SE LLAMA 