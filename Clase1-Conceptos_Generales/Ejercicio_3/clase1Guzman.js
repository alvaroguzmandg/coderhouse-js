//Pedir un texto mediante prompt, 
//luego otro, concatenarlos y mostrarlo en un alerta.


let nombreIngresado = prompt("¡Hola! Me dijeron que sos mi tutor. ¿Cuál es tu nombre?");
let apellidoIngresado = prompt("¡Cierto! Me dijeron que mi tutor era " + nombreIngresado + " ¿pero cuál es tu apellido?")


alert("¡Es verdad! El coderBot me dijo que te llamabas " + nombreIngresado + apellidoIngresado);