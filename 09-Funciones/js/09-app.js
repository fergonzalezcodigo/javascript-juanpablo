//Metodos de propiedad
//SOn funciones con una sintaxis que al utilizarlas es lo mismo que un metodo
//Llegan a ser comunes porque es un objeto grande que contienen todas las funciones

//En un objeto 'reproducir' sería una propiedad, pero como tiene una funcion se le conoce como metodos de propiedad

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion... ${id}`);
    },
    pausar: function(){
        console.log("pausando...");
    },
    borrar: function(){
        console.log("borrando cancion...");
    },
    crear: function(nombre){
        console.log(`Creando playlist ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar();
reproductor.crear('The beatles');