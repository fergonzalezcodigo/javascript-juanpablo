//Eliminar elementos, existen dos formas
        //Eliminar un elemento por si mismo
        //Eliminarlo desde el padre


//Eliminar un elemento por si mismo
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace);


//Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);