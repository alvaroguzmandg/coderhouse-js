//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.

let nombreIngresado = prompt("¡Hola Sayayin! ¿Me recuerdas tu nombre?");

let numeroIngresado = parseInt(prompt("Hola " + nombreIngresado + " ¿cuál es valor numérico de tu nivel de poder?"));

if (numeroIngresado > 1000) {
    alert("¡Wow! ¡" + numeroIngresado + " es un número muy alto! Vegeta estaría orgulloso pero no sorprendido!")
} else {
    alert("¡Vegeta te consideraría un guerrero de clase baja!")
}

// Especial para entendidos de Dragon Ball!