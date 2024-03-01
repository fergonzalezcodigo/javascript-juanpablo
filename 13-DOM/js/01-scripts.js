let elemento;
//En el DOM tenemos accesso a un objeto llamado "Document"
//El document es todo el HTML que tenemos en nuestro proyecto


elemento = document; //Seleccionamos todo el documento
elemento = document.all; //Todos los elementos que conforman el HTML
elemento = document.head; //Se va a referir a la parte superior
elemento = document.body; //Todo lo que esté adentro de la etiqueta body
elemento = document.domain //Decir en que URL está cargando el proyecto
elemento = document.forms //Te va a decir cuantos formularios hay en el proyecto
elemento = document.forms[0];   //Se parece a un arreglo pero aquí se les dice "coleccion de HTML"
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList; //Las clases que tiene el formulario
elemento = document.forms[0].action;
elemento = document.links; //Todos los enlaces que tiene la página
elemento = document.links[4];
elemento = document.links[4].classList;
elemento = document.links[4].className; //Con esté te lo retorna con un String, mientras que con List te lo retorna parecido a un arreglo
elemento = document.images; //Saber cuantas imagenes hay en el proyecto

//Todo hace referencia al document, al final todo el HTML reside en el document y puedes hacer referencias
//a elementos de HTML, imagenes, scripts u hojas de estilo
//Puedes tener control sobre todo en el documento o en el DOM

console.log(elemento);