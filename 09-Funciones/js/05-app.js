function sumar(a,b){  //a y b son parametros
    console.log(a+b);
}
sumar(20, 30); // 20 y 30 son argumentos
sumar(50,10);


//Nombre y apellido son parametros, son valores que se le pueden pasar a la función
//No son valores reales, son variables
//Los parametros son variables porque no todos tendrian el mismo nombre
function saludar(nombre,apellido){
    console.log(`Alumno con el nombre: ${nombre} y apellido: ${apellido}, es mayor de edad`);
}
saludar('Fernando','Iván');

//Sale 'undefined' porque estamos llamando la variable pero no tiene ningun valor
saludar('Fernando')