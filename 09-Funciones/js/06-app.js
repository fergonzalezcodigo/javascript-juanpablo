function saludar(nombre,apellido = 'No se encontró un apellido'){
    console.log(`Alumno con el nombre: ${nombre} y apellido: ${apellido}, es mayor de edad`);
}
saludar('Fernando');


function saludar2(nombre,apellido = ''){
    console.log(`Alumno con el nombre: ${nombre} y apellido: ${apellido}, es mayor de edad`);
}
saludar2('Fernando');

function saludar3(nombre,apellido = ''){
    console.log(`Alumno con el nombre: ${nombre} y apellido: ${apellido}, es mayor de edad`);
}
saludar();
