//Return solo funciona dentro de una funcion

const puntaje = 450;
//return hace que no siga ejecutandose el código 
function revisarPuntaje(){
if(puntaje > 400){
console.log("Excelente!!");
return;
}
if(puntaje > 300){
console.log("Buen puntaje.. felicidades");
return;
}
}
revisarPuntaje();