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


class Corredor {
    constructor(nombre, apellido, edad, carrera, corral, estadoInscripcion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.corral = corral;
        this.estadoInscripcion = false;
    }
    pagarInscripcion() {
        return this.estadoInscripcion = true;
    }
}

const carreras = [];
carreras.push(new Carrera("42k de Buenos Aires", "10 de Octubre", 10, 3000));
carreras.push(new Carrera("21k de Buenos Aires", "11 de Septiembre", 20, 1500));
carreras.push(new Carrera("10k de Buenos Aires", "13 de Diciembre", 30, 1000));


let corredoresRegistrados = [];

corredoresRegistrados.push(new Corredor("Alvaro", "Guzman", 31, 1, "Corral A"));
corredoresRegistrados.push(new Corredor("Delfina", "Gaudio", 30, 2, "Corral C"));
corredoresRegistrados.push(new Corredor("Gonzalo", "Rey", 33, 3, "Corral A"));
corredoresRegistrados.push(new Corredor("Santiago", "Olivieri", 42, 3, "Corral B"));



const corredores10k = [corredoresRegistrados.filter(Corredor => Corredor.carrera == 3)]

console.log(corredores10k)