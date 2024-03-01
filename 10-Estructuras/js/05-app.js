//Cuando son muchas condiciones es más fácil usar un switch
//Switch case
const metodoPago = "cheque";
//El case no es obligatorio pero el defauilt si (el default es como un else)
switch(metodoPago){
case "efectivo":
console.log(`Pagaste con ${metodoPago}`);
break;
case "cheque":
console.log(`Pagaaste con ${metodoPago}`);
break;
case "tarjeta":
console.log(`Pagaste con ${metodoPago}`);
break;
default:
console.log("Aún no has seleccionado un método de pago o método de pago no soportado");
break;
}