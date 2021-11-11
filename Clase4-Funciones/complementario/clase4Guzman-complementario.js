alert("Bienvenido al formulario de inscripción");
let nombre = prompt("Ingrese su nombre");

let carrera = prompt("Hola " + nombre + " elije la carrera que deseas inscribirte \n'A' para 42k \n'B' para 21k \nO cualquier letra para salir").toUpperCase();;



function precioInscripcion() {
    if (carrera == "A") {
        alert("Tu precio de inscripción es de $3000");
    } else if (carrera == "B") {
        alert("Tu precio de inscripción es de $1500");
    } else {
        alert("Vuelva pronto");
    }
}


function cuotasInscripcion() {
    if (carrera == "A") {
        valorInscripcion = 3000;
    } else {
        valorInscripcion = 1500;
    }

    let valorCuota = valorInscripcion / cantidadCuotas
    alert("Tienes que pagar $ " + valorCuota + " en " + cantidadCuotas + " cuotas");
}


function corralSalida() {
    if (carrera == "A") {
        if (corral < 1) {
            alert("Tu corral de salida es el C");
        } else if (corral == 1) {
            alert("Tu corral de salida es el B");
        } else {
            alert("Tu corral de salida es el A");
        }
    } else {
        if (corral < 1) {
            alert("Tu corral de salida es el D");
        } else if (corral == 1) {
            alert("Tu corral de salida es el E");
        } else if (corral > 1) {
            alert("Tu corral de salida es el F")
        }

    }
}

precioInscripcion();
let cantidadCuotas = parseInt(prompt("Ingrese el número de cuotas en que quiere pagar la inscripcion"));
cuotasInscripcion(cantidadCuotas);
let corral = parseInt(prompt("Ingresa cuántos kilómetros corres en 5 minutos para saber tu corral de salida"));
corralSalida();



switch (carrera) {
    case "A":
        alert("Gracias por inscribirte en los 42k de Buenos Aires");
        carrera = "42k de Buenos Aires"
        break;
    case "B":
        alert("Gracias por inscribirte en los 21k de Buenos Aires");
        carrera = "21k de Buenos Aires"
        break;
}
console.log(nombre + " se inscribió en " + carrera)