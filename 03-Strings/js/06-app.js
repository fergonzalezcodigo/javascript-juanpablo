const producto = "Monitor de 20 pulgadas";

//repeat te va a permitir repetir una palabra
const texto = ' en promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`);

//Split va a dividir un string
const actividad = "Estoy aprendiendo javascript moderno";
console.log(actividad.split(" "));

const hobbies = "leer, caminar, escuchar musica, escribir";
console.log(hobbies.split(","));

//Como hace twitter para resaltar hastag
const tweet = "Aprendiendo JavaScript #JSmoderno"
console.log(tweet.split('#'));