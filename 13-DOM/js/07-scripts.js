//Modificar el CSS

//Se puede quitar o agregar clases
//Cuando llenas un formulario y dejas campos vacios a veces JS muestra el campo en color rojo


//Una carecteristica que tienen los estilos en JS
//En css si la palabra tiene un guión medio "-"  background-color
//En JS se va a eliminar el guión medio y la segunda palabra inicia con mayúscula backgroundColor


const encabezado = document.querySelector('h1');

//console.log(encabezado.style);

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

//La apariencia es responsabilidad del código CSS, es recomendable agregar o quitar clases
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
//eliminar una clase
card.classList.remove('card');
console.log(card.classList);