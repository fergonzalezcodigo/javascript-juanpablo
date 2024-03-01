const producto = "Monitor 20 pulgadas";
console.log(producto);

//Reemplazar el texto de una palabra (replace)
console.log(producto.replace('pulgadas', '"'));

console.log(producto.replace('Monitor', "Monitor curvo"));


//Cortar una parte de una palabra pasandole la posicion(slice)
console.log(producto.slice(0,10)); //Guarda lo que está del 0 al 10 y elimina lo demás
console.log(producto.slice(8)); //Elimina los primeros 8 pero lo demás no


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PREGUNTA TRABAJO
//Alternativa a slice
//La diferencia entre slice y substring es que si lo puedes engañar pasandole un número
//mayor de inicio
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

//Google con la letra inicial en un circulo
const usuario = "Fernando"

console.log(usuario.substring(0,1));
console.log(usuario.charAt(0)); //corta la primer letra