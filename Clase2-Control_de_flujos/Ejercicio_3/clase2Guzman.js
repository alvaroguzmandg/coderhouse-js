//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.


let numeroIngresado = parseInt(prompt("Ingrese un número entre 10 y 50"));
if ((numeroIngresado >= 10) && (numeroIngresado <= 50)) {
    alert("Ese número está entre 10 y 50. ¡Muy bien!")
} else {
    alert("Ese número está entre 10 y 50 :( ")
}