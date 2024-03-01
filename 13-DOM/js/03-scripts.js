Porque el form me lo muestra diferente al del video

//Como seleccionar elementos por su ID
//Los ID solamente se debe utilizar un id con ese nombre una vez por documento

const formulario = document.getElementById('formulario');
console.log(formulario);


const noExiste = document.getElementById('no-existe');
console.log(noExiste); //retorna un null, a diferencia de class que retornaba una coleccion de HTML sin datos


//Si tengo dos ID con el mismo nombre, va a seleccionar el primero que encuentre