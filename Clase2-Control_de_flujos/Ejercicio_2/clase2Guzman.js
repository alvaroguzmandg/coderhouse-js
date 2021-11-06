// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

const hola = "Hola"
let textoIngresado = prompt("¡Hola! Escribirías 'Hola'?")

if (textoIngresado === hola) {
    console.log("Ese es un buen " + hola)
} else {
    console.log("Ese " + textoIngresado + " no es un buen " + hola)
}