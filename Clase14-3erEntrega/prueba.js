let carrera = [];

class Carrera {
    constructor(id, nombre, distancia, fecha, lugar, horario, foto) {
        this.id = id;
        this.nombre = nombre;
        this.distancia = distancia;
        this.fecha = fecha;
        this.lugar = lugar;
        this.horario = horario;
        this.foto = foto;
        this.estado = true;
    }
    regitrardo() {
        this.estado = true;
    }
}




$.getJSON("https://alvaroguzmandg.github.io/coderhouse-js/Clase14-Ajax_jQuery/carreras.json", function(data) {
    data.forEach(elemento => carrera.push(elemento))
        //Función para cargar las carreras en el DOM
    calendarioDeCarreras();
})

function calendarioDeCarreras() {
    carrera.forEach((carrera) => {

        $("#carreras").append(`
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




function cargarCarrerasAlCarrito() {
    carrera.forEach((carrera) => {
        let btn = document.getElementById(("btnInscripcion" + carrera.id));
        btn.addEventListener("click", () => {
            if (carrera.estado) {
                document.getElementById(("btnInscripcion" + carrera.id)).innerHTML = `¡YA ESTÁS REGISTRADO!`
            } else {
                //Animación del botón de Inscripción
                $("#btnInscripcion" + carrera.id)
                    .slideUp(0)
                    .delay(0)
                    .slideDown(700)
                    .css({ "border": 0, "background-color": "black" })
                    .text("¡YA ESTÁS REGISTRADO!")


                //Carreras se agregan al carrito
                carrito.push(carrera);
                carrera.estado = true;

                //Se muestras en el carrito las carreras
                let contenedor = document.getElementById("carrito");
                contenedor.innerHTML = " "
                htmlString = "<ul>";
                for (const id in carrito) {
                    let carrera = carrito[id]
                    htmlString += `<li id="carrera">
                    <span class="carrito__carreraImagen"><img src="${carrera.foto}"></span>
                    <span class="carrito__carreraTexto">
                        <span class="carrito__carreraTexto--titulo">${carrera.nombre}</span>
                        <span class="carrito__carreraTexto--fecha">${carrera.fecha}</span>
                        <span id="quitar_${id}" class="carrito__carreraTexto--quitar">Quitar Carrera</span>
                    </span>
                    </li>
                    `
                }
                htmlString += "</ul>"
                contenedor.innerHTML = htmlString


                localStorage.setItem('carrerasRegistradas', JSON.stringify(carrito));
                $(".tituloCarrito").text("CARRERAS REGISTRADAS (" + carrito.length + ")")
                quitarCarrera();
            }
        })
    })

}