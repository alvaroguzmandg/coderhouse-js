//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

var mensaje = prompt("Ingrese el mensaje que le gustaria que repita");
var repeticion = prompt("Ingrese la cantidad de veces que quiera ver el mensaje repetido");
alert("Repetiré tu mensaje " + repeticion + " veces");
for (i = 1; i <= repeticion; i++) {
    alert(mensaje + ". Esta es la vez número " + i + " que repito tu mensaje")
}
alert("Tu mensaje fue repetido " + repeticion + " veces");