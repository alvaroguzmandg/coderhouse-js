//Constructora de carreras
class Carrera {
    constructor(nombre, fecha, cupo, costo) {
        this.id = Carrera.ID;
        Carrera.ID++;
        this.nombre = nombre;
        this.fecha = fecha;
        this.cupo = cupo;
        this.costo = costo;


    }
    static ID = 1
    restarCupo() {
        this.cupo = this.cupo - 1;
        return "Quedan " + this.cupo + " cupos";
    }
}

//Array de Carreras
const carreras = [];
carreras.push(new Carrera("42k de Buenos Aires", "10 de Octubre", 10, 3000));
carreras.push(new Carrera("21k de Buenos Aires", "11 de Septiembre", 20, 1500));


//Constructor de corredor
class Corredor {
    constructor(nombre, apellido, edad, carrera, corral, estadoInscripcion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.corral = corral;
        this.estadoInscripcion = estadoInscripcion;
    }

    //Métodos
    inscribir() {
        if (corredor.carrera == 1) {
            corredores42k.push(corredor)
        } else {
            corredores21k.push(corredor)
        }
        alert("¡Ya estás inscripto!")
    }

    eleccionCorral() {
        let ritmo = parseFloat(prompt("Ingresa en cuántos minutos corres 1km"));
        if (this.carrera == 1) {
            if (ritmo < 4) {
                alert("Tu corral de salida es el A");
                return this.corral = "Corral A"
            } else if ((ritmo >= 4) && (ritmo < 6)) {
                alert("Tu corral de salida es el B");
                return this.corral = "Corral B"
            } else if ((ritmo >= 6)) {
                alert("Tu corral de salida es el C");
                return this.corral = "Corral C"
            }
        } else {
            if (ritmo < 4) {
                alert("Tu corral de salida es el D");
                return this.corral = "Corral D"
            } else if ((ritmo >= 4) && (ritmo < 6)) {
                alert("Tu corral de salida es el E");
                return this.corral = "Corral E"
            } else if (ritmo >= 6) {
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

// Función para Registrar corredor
function registrarCorredor() {
    let edadCorredor = prompt("Esta carrera es apta sólo para mayores de edad\nPor favor ingresa tu edad");
    if (edadCorredor < 18) {
        alert("¡Lo sentimos, la carrera solo es para mayores de 18 años!")
        return
    }
    let nombreCorredor = prompt("Ingresa tu nombre");
    let apellidoCorredor = prompt("Ingresa tu apellido");

    do {
        carrera = prompt("Bienvenido " + nombreCorredor + " " + apellidoCorredor + "\nElije la carrera que deseas inscribirte \nIngresa '1' para 42k \no '2' para 21k");
    }
    while ((carrera != 1) && (carrera != 2))
    alert("¡Gracias por registrarte!")
    return (corredor = new Corredor(nombreCorredor, apellidoCorredor, edadCorredor, carrera));
}


// Array de corredores inscriptos en 42k
let corredores42k = []
corredores42k.push(new Corredor("Gonzalo", "Rey", 33, 1, "Corral A", true));
corredores42k.push(new Corredor("Mariano", "Tabanera", 31, 1, "Corral B", true));


// Array de corredores inscriptos en 21k
let corredores21k = []
corredores21k.push(new Corredor("Delfina", "Gaudio", 30, 2, "Corral C", false));
corredores21k.push(new Corredor("Santiago", "Olivieri", 42, 2, "Corral D", true));


// Inicio del proceso
alert("Bienvenido al formulario de inscripción");

// Función para registrar corredor
registrarCorredor()

//Funcion para inscribir corredor en la carrera elegida
corredor.inscribir()

//Funcion para seleccionar el corral de salida
corredor.eleccionCorral()

//Funcion para cmbiar estado de inscripción
corredor.pagarInscripcion()

// Confirmación de estado de inscripción
console.log(corredor.nombre + " se encuentra inscripto y saldrá del corral " + corredor.corral)

//Filtro del Array para corredores con inscripción confirmada
const corredores42kConfirmados = corredores42k.filter(Corredor => Corredor.estadoInscripcion == true)
const corredores21kConfirmados = corredores21k.filter(Corredor => Corredor.estadoInscripcion == true)

console.log("La cantidad de inscriptos en 42k es de " + corredores42kConfirmados.length)
console.log("La cantidad de inscriptos en 21k es de " + corredores21kConfirmados.length)