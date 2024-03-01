//Igual que los objetos, los arreglos se pueden modificar a pesar de que esten declarados con const
//!!!!PREGUNTA DE TRABAJO (En que valores una variable declarada en const se pueden modificar sus valores R= en un objeto y en un array)
//Los arreglos no puedes congelarlos ni sellarlos


const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'];
mese[0] = "Nuevo Mes";
console.table(meses)