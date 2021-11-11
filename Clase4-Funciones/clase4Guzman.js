alert("Bienvenido al formulario de inscripción");
let nombre = prompt("Ingrese su nombre");

let carrera = prompt("Hola " + nombre + " elije la carrera que deseas inscribirte \n'A' para 42k \n'B' para 21k \nO cualquier letra para salir").toUpperCase();;

switch (carrera) {
    case "A":
        alert("Gracias por inscribirte en los 42k de Buenos Aires");
        carrera = "42k de Buenos Aires"
        break;
    case "B":
        alert("Gracias por inscribirte en los 21k de Buenos Aires");
        carrera = "21k de Buenos Aires"
        break;
    case "C":
        alert("¡Vuelva pronto!");
        break
}

function precioInscripcion() {

    if (carrera == "42k de Buenos Aires") {
        alert("Tu precio de inscripción es de $3000")
    } else if (carrera == "21k de Buenos Aires") {
        alert("Tu precio de inscripción es de $1500")
    } else {
        alert("¡Vuelva pronto!");
    }
}

precioInscripcion();
console.log(nombre + " se inscribió en " + carrera)