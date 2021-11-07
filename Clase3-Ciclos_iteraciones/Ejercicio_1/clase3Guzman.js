//Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado


let numeroIngresado = parseInt(prompt("Dime un número maravilloso"));

for (i = 1; i <= 10; i++) {
    let resultado = numeroIngresado + i;
    console.log("Si al maravilloso número " + numeroIngresado + " le sumamos " + i + " nos da como resultado " + resultado)
}