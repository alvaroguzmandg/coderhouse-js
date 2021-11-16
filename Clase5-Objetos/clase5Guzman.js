class Carrera {
    constructor(nombre, distancia, cupo, costo) {
        this.nombre = nombre;
        this.distancia = distancia;
        this.cupo = cupo;
        this.costo = costo;
    }
    restarCupo() {
        this.cupo = this.cupo - 1;
        return "Quedan " + this.cupo + " cupos";
    }
}

class Usuario {
    constructor(nombre, apellido, edad, carrera, corral, estadoInscripcion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.corral = corral;
        this.estadoInscripcion = false;
    }

    validarEdad() {
        if (this.edad < 18) {
            alert("No puedes participar")
            return false;
        } else {
            return true;
        }
    }

    inscribirse() {
        let carrera = prompt("Elije la carrera que deseas inscribirte \n'A' para 42k \n'B' para 21k").toUpperCase();
        return this.carrera = carrera;
    }

    eleccionCorral() {
        let ritmo = parseFloat(prompt("Ingresa en cuántos minutos corres 1km"));
        if (this.carrera == "A") {
            if (ritmo < 4) {
                alert("Tu corral de salida es el A");
                return this.corral = "Corral A"
            } else if ((ritmo >= 4) && (corral < 5)) {
                alert("Tu corral de salida es el B");
                return this.corral = "Corral B"
            } else if ((ritmo >= 5)) {
                alert("Tu corral de salida es el C");
                return this.corral = "Corral C"
            }
        } else {
            if (ritmo < 4) {
                alert("Tu corral de salida es el D");
                return this.corral = "Corral D"
            } else if ((ritmo >= 4) && (corral < 5)) {
                alert("Tu corral de salida es el E");
                return this.corral = "Corral E"
            } else if (ritmo >= 5) {
                alert("Tu corral de salida es el F")
                return this.corral = "Corral F"
            }
        }
        return this.corral
    }

    pagarInscripcion() {
        return this.estadoInscripcion = true;
    }
}


const buenosAires42k = new Carrera("Maratón de Buenos Aires", "42k", 20, 3000);
const buenosAires21k = new Carrera("Media de Buenos Aires", "21k", 10, 1500);

alert("Bienvenido al formulario de inscripción");
let usuario1 = new Usuario(
    prompt("Ingrese su nombre"),
    prompt("Ingrese su apellido"),
    prompt("Ingrese su edad"),
);

if (usuario1.validarEdad()) {
    usuario1.inscribirse();
    usuario1.eleccionCorral();
    usuario1.pagarInscripcion();
    document.write("¡Gracias por inscribirte!")
} else {
    alert("¡Lo esperamos el siguiente año!")
}

if ((usuario1.carrera) = "A") {
    buenosAires42k.restarCupo();
} else if ((usuario1.carrera) = "B") {
    buenosAires21k.restarCupo();
}