//Pedir un texto mediante prompt, 
//concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.


do {
    numero = prompt("Ingrese un número para visualizarlo o SALIR para salir.");
    console.log("Tu elección es " + numero);
} while (numero !== "SALIR");
alert("Creí que estaríamos ahí por siempre");
console.log("¡Gracias por participar!")