class Carrera {
    constructor(nombre, distancia, fecha, lugar, horario, foto) {
        this.nombre = nombre;
        this.distancia = distancia;
        this.fecha = fecha;
        this.lugar = lugar;
        this.horario = horario;
        this.foto = foto;
    }

}


let carrera = [];

carrera.push(new Carrera("Maratón de Buenos Aires", "42k", "11 de octubre", "Capital Federal", "7AM", "arquivos/42kBsAs.png"));
carrera.push(new Carrera("Media de Buenos Aires", "21k", "11 de octubre", "Capital Federal", "8AM", "arquivos/21kBsAs.png"));
carrera.push(new Carrera("Carrera Maya", "10k", "25 de mayo", "Capital Federal", "7AM", "arquivos/mayas.png"));
carrera.push(new Carrera("Patagonia Run", "110k", "7 de abril", "San Martín de los Andes", "2AM", "arquivos/patagoniaRun110k.png"));
carrera.push(new Carrera("Chicago Marathon", "42k", "17 de octubre", "Chicago, USA", "8AM", "arquivos/42kchicago.png"));
carrera.push(new Carrera("Media de Miami", "21k", "14 de enero", "Miami, USA", "6AM", "arquivos/21kmiami.png"));
carrera.push(new Carrera("Nono Race", "60kg", "13 de junio", "Córdoba", "5AM", "arquivos/nono.png"));
carrera.push(new Carrera("San Silvestre", "8k", "31 de diciembre", "Capital Federal", "9AM", "arquivos/sanSilvestre.png"));
carrera.push(new Carrera("Cruce de los Andes", "100k", "3 de diciembre", "San Martín de los Andes", "6AM", "arquivos/cruce.png"));




function listadoCarreras() {
    carrera.forEach((carrera) => {

        const divCarrera = document.createElement('div');
        divCarrera.classList.add('contenedorCarrera');

        document.getElementById("contenedorEventos").appendChild(divCarrera);


        const tituloCarrera = document.createElement('h2');
        tituloCarrera.textContent = carrera.nombre;
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
        btnInscripcion.classList.add("btRunDestacado-large");



        divCarrera.appendChild(tituloCarrera);
        divCarrera.appendChild(fotoCarrera);
        divCarrera.appendChild(fechaHora);
        divCarrera.appendChild(lugarCarrera);
        divCarrera.appendChild(btnInscripcion);

    })
}






document.addEventListener("DOMContentLoaded", () => {
    listadoCarreras();
})
