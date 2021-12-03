class Carrera {
    constructor(id, nombre, distancia, fecha, lugar, horario, foto, estado) {
        this.id = id;
        this.nombre = nombre;
        this.distancia = distancia;
        this.fecha = fecha;
        this.lugar = lugar;
        this.horario = horario;
        this.foto = foto;
        this.estado = estado;
    }
}


let carrera = [];


//Carreras Registradas
carrera.push(new Carrera("1", "42k Buenos Aires", "42k", "11 de octubre", "Capital Federal", "7AM", "arquivos/42kBsAs.png", false));
carrera.push(new Carrera("2", "21 Buenos Aires", "21k", "11 de octubre", "Capital Federal", "8AM", "arquivos/21kBsAs.png", false));
carrera.push(new Carrera("3", "Carrera Maya", "10k", "25 de mayo", "Capital Federal", "7AM", "arquivos/mayas.png", false));
carrera.push(new Carrera("4", "Patagonia Run", "110k", "7 de abril", "San Martín de los Andes", "2AM", "arquivos/patagoniaRun110k.png", false));
carrera.push(new Carrera("5", "Chicago Marathon", "42k", "17 de octubre", "Chicago, USA", "8AM", "arquivos/42kchicago.png", false));
carrera.push(new Carrera("6", "21k Miami", "21k", "14 de enero", "Miami, USA", "6AM", "arquivos/21kmiami.png", false));
carrera.push(new Carrera("7", "Nono Race", "60kg", "13 de junio", "Córdoba", "5AM", "arquivos/nono.png", false));
carrera.push(new Carrera("8", "San Silvestre", "8k", "31 de diciembre", "Capital Federal", "9AM", "arquivos/sanSilvestre.png", false));
carrera.push(new Carrera("9", "Cruce de los Andes", "100k", "3 de diciembre", "San Martín de los Andes", "6AM", "arquivos/cruce.png", false));



function calendarioDeCarreras() {
    carrera.forEach((carrera) => {

        const divCarrera = document.createElement('div');
        divCarrera.classList.add('contenedorCarrera');
        divCarrera.id = "contenedorCarrera";

        document.getElementById("contenedorEventos").appendChild(divCarrera);


        const tituloCarrera = document.createElement('h2');
        tituloCarrera.textContent = carrera.nombre;
        tituloCarrera.id = "tituloCarrera";
        tituloCarrera.classList.add("tituloCarrera");


        const fotoCarrera = document.createElement('img');
        fotoCarrera.src = carrera.foto;
        fotoCarrera.classList.add("fotoCarrera")


        const fechaCarrera = document.createElement('span');
        fechaCarrera.textContent = carrera.fecha;
        fechaCarrera.classList.add("fechaCarrera");

        const horarioCarrera = document.createElement('span');
        horarioCarrera.textContent = "Horario: " + carrera.horario;
        horarioCarrera.classList.add("horarioCarrera");

        const fechaHora = document.createElement('span');
        fechaHora.classList.add("fechaHora")
        fechaHora.appendChild(fechaCarrera);
        fechaHora.appendChild(horarioCarrera);

        const lugarCarrera = document.createElement('span');
        lugarCarrera.textContent = carrera.lugar;
        lugarCarrera.classList.add("lugarCarrera");



        const btnInscripcion = document.createElement('button');
        btnInscripcion.textContent = "INSCRIBIRME";
        btnInscripcion.id = "btnInscripcion" + carrera.id;
        btnInscripcion.classList.add("btRunDestacado-large");



        divCarrera.appendChild(tituloCarrera);
        divCarrera.appendChild(fotoCarrera);
        divCarrera.appendChild(fechaHora);
        divCarrera.appendChild(lugarCarrera);
        divCarrera.appendChild(btnInscripcion);

    })
}


//Función para cargar las carreras en el DOM
calendarioDeCarreras();