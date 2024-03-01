//Como unir dos arreglos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

//El orden en que le pasas los valores es importante

//Array method concat
const resultado = meses.concat(meses2, meses3, 'Otro mes');
console.log(resultado);

//Forma con el spread operator
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro mes'];
console.log(resultado2);