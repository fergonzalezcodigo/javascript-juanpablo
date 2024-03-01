//Como pasarle parametros a un arrow function

const aprendiendo = function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo('Python')

//Cuando le pasas UN solo parametro al arrow function, los parentesis son opcionales
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo2("PHP"));