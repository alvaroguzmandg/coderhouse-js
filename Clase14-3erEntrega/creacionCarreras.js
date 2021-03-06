let carrera = [];
class Carrera {
    constructor(id, nombre, distancia, fecha, lugar, horario, foto, estado) {
        this.id = id;
        this.nombre = nombre;
        this.distancia = distancia;
        this.fecha = fecha;
        this.lugar = lugar;
        this.horario = horario;
        this.foto = foto;
        this.estado = verificarEstado();
    }

}

//Función que contruye en el DOM el calendario de carreras
function calendarioDeCarreras() {
    carrera.forEach((carrera) => {

        if (carrera.estado) {
            $("#contenedorEventos").append(`
                <div class="contenedorCarrera" id="contenedorCarrera${carrera.id}">
                    <h2 id="tituloCarrera" class="tituloCarrera">${carrera.nombre}</h2>
                    <img src="${carrera.foto}" class="fotoCarrera">
                    <span class="fechaHora">
                        <span class="fechaCarrera">${carrera.fecha}</span>
                        <span class="horarioCarrera">Horario: ${carrera.horario}</span>
                    </span>
                    <span class="lugarCarrera">${carrera.lugar}</span>
                    <button id="btnInscripcion${carrera.id}" class="btRunDestacado-large">¡YA ESTÁS REGISTRADO!</button>   
                </div>
            `)
            $("#btnInscripcion" + carrera.id)
                .css({ "border": 0, "background-color": "black" });


        } else {
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
        }
    })
}



//JSON que trae el llistado de carreras
$.getJSON("https://alvaroguzmandg.github.io/coderhouse-js/Clase14-3erEntrega/carreras.json", function(data) {

    //Push del contenido carreras.json al array "carrera"
    data.forEach(elemento => carrera.push(elemento))

    //Verifica el estado de inscripción a la carrera
    verificarEstado()

    // Carga las carreras en el DOM
    calendarioDeCarreras();
})