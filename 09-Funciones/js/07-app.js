//Es recomendable que las funciones esten divididas en pequeñas partes y se comuniquen unas con otras

//Siempre tiene que haber una función que inicie todo
iniciarApp();

function iniciarApp(){
    console.log("Iniciando app");

    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde la segunda funcion");

    usuarioAutenticado('Fernando');
}

function usuarioAutenticado(usuario){
    console.log("Autenticando usuario");
    console.log(`El usuario ${usuario} fue autenticado exitosamente`);
}