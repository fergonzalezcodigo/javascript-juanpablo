//Eliminar espacios

const producto = '                Monitor 20 pulgadas';

console.log(producto);
console.log(producto.length);

//Eliminar del inicio
console.log(producto.trimStart());

//Eliminar al final
console.log(producto.trimEnd());

//De forma encadenada(se le conoce como = chaning)
console.log(producto.trimStart().trimEnd());

//Ya es viejo pero elimina los dos por eso no tiene start o end
console.log(producto.trim());