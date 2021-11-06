// Pedir un número mediante prompt, parsearlo, 
//sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.



let nombreIngresado = prompt("¡Bienvenido al curso de Javascript! Por favor ingrese su nombre");
let edadTutor = parseInt(prompt("¡Hola " + nombreIngresado + "! ¿cuántos años tenés?"));
let edadAlumno = 31;
let nuestrasEdades = edadAlumno + edadTutor;
console.log("¡Wow! ¡La suma de nuestras edades es " + nuestrasEdades + " pero igual somos jóvenes!");