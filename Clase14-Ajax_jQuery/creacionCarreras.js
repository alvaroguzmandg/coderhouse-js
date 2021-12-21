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
// carrera.push(new Carrera("1", "42k Buenos Aires", "42k", "11 de octubre", "Capital Federal", "7AM", "arquivos/42kBsAs.png", false));
// carrera.push(new Carrera("2", "21 Buenos Aires", "21k", "11 de octubre", "Capital Federal", "8AM", "arquivos/21kBsAs.png", false));
// carrera.push(new Carrera("3", "Carrera Maya", "10k", "25 de mayo", "Capital Federal", "7AM", "arquivos/mayas.png", false));
// carrera.push(new Carrera("4", "Patagonia Run", "110k", "7 de abril", "Neuquen", "2AM", "arquivos/patagoniaRun110k.png", false));
// carrera.push(new Carrera("5", "Chicago Marathon", "42k", "17 de octubre", "Chicago, USA", "8AM", "arquivos/42kchicago.png", false));
// carrera.push(new Carrera("6", "21k Miami", "21k", "14 de enero", "Miami, USA", "6AM", "arquivos/21kmiami.png", false));
// carrera.push(new Carrera("7", "Nono Race", "60kg", "13 de junio", "Córdoba", "5AM", "arquivos/nono.png", false));
// carrera.push(new Carrera("8", "San Silvestre", "8k", "31 de diciembre", "Capital Federal", "9AM", "arquivos/sanSilvestre.png", false));
// carrera.push(new Carrera("9", "Cruce de los Andes", "100k", "3 de diciembre", "Neuquen", "6AM", "arquivos/cruce.png", false));



$.getJSON("https://alvaroguzmandg.github.io/coderhouse-js/Clase14-Ajax_jQuery/carreras.json", function(data) {
    console.log(data)

    data.forEach(elemento => carrera.push(elemento))
        //Función para cargar las carreras en el DOM
    calendarioDeCarreras();
})

function calendarioDeCarreras() {
    carrera.forEach((carrera) => {

        $("#contenedorEventos").append(`
        <div class="contenedorCarrera" id="contenedorCarrera${carrera.id}">
            <h2 id="tituloCarrera" class="tituloCarrera">${carrera.nombre}</h2>
            <img src="${carrera.foto}" class="fotoCarrera">
            <span class="fechaHora">
                <span class="fechaCarrera">${carrera.fecha}</span>
                <span class="horarioCarrera">Horario: ${carrera.horario}</span>
            </span>
            <span class="lugarCarrera">${carrera.lugar}</span>
            <button id="btnInscripcion${carrera.id}" class="btRunDestacado-large">¡INSCRIBIRME!</button>
        </div>

        `)

    })
}