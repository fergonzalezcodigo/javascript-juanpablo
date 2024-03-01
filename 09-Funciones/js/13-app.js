//Ventajas de los arrow function con los metodos de propiedad
const reproductor = {
    cancion: "",
    reproducir: id => console.log(`Reproduciendo cancion... ${id}`),
    pausar: () => console.log("pausando..."),
    borrar: () => console.log("borrando cancion..."),
    crear: nombre => console.log(`Creando playlist ${nombre}`),

    //SET es una forma de agregar valores y GET una forma de obtener de vuelta esos valores
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}
reproductor.nuevaCancion = "Enter Sandman";
//Como es un GET no es necesario un parentesis
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar();
reproductor.crear('The beatles');