const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);

//Como recorrer un arreglo que su distancia puede ser variable

//Cuanto mide el arreglo
console.log(meses.length);

//Para recorrer el arreglo se necesita un iterador
//se utiliza let porque si le pones const va ir incrementando una vez y otra vez cada que se ejecute la función, entonces no puedes reasignar un const
for(let i = 0; i < meses.length; i++){
console.log(meses[i]);
}