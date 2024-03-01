const formulario = document.querySelector('#formulario');


/* //Cuando alguien presiona el input o button que tiene el type="submit"
formulario.addEventListener('submit', (evt) => {
    evt.preventDefault(); //Prevenir la acción que realizaria ese elemento por default (enviar formulario o entrar a un enlace)
    //Es común detener la acción por default, después validar el formulario, llamar el  endpoint de una api y consumir el resultado
    console.log('Buscando...');
    //console.log(evt);
    //console.log(evt.target.method) //tipo de metodo (post) que utiliza el formulario
    console.log(evt.target.action); //hacia donde va a ir este formulario
}); */


formulario.addEventListener('submit', validarFormulario/*En lugar de una función anonima, el nombre de la función que deseo ejecutar*/);


function validarFormulario(evt){
    evt.preventDefault();
    //Permitir que no se abra lo que está en el action y no envie los datos via metodo post o get, si no que tu puedas
    //si no que tú puedas realizar las acciones como puede ser la validación de un formulario o enviar los datos hacía una endpoint de una api
    console.log('Consultar una api');
    console.log(evt.target.action);
}