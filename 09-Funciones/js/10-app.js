//Arrow function
//Son otra forma de declarar funciones

const aprendiendo = function() {
    console.log("Aprendiendo JS");
}
aprendiendo();

const aprendiendo2 = () =>{
    console.log("Aprendiendo JS");
}
aprendiendo2();

//Cuando tienes una función con una linea puedes quitar las llaves
//Se puede quitar el console.log porque da por implicito un return
const aprendiendo3 = () => "Sin llaves";
console.log(aprendiendo3());