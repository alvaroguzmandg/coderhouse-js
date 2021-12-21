//verificamos el carrito del localstorage
let carrerasRegistradas = localStorage.getItem("carrerasRegistradas")
let carrito = [];
if (carrerasRegistradas) {
    carrito = JSON.parse(carrerasRegistradas)
        //Actualiza la cantidad de carreras registradas
    $(".tituloCarrito").text("CARRERAS REGISTRADAS (" + carrito.length + ")")

}

//Verifica el estado de inscripción a la carrera para actualizar el Array generado por el Json
function verificarEstado() {
    for (let i = 0; i < carrito.length; i++) {
        let verificacionCarrito = carrito[i].id
        carrera.forEach((carrera) => {
            if (carrera.id == verificacionCarrito) {
                carrera.estado = true;
            }
        })
    }

}


//Función para agregar carreras al carrito y crear la visualización
function cargarCarrerasAlCarrito() {
    carrera.forEach((carrera) => {
        let btn = document.getElementById(("btnInscripcion" + carrera.id));
        btn.addEventListener("click", () => {
            if (carrera.estado) {
                // document.getElementById(("btnInscripcion" + carrera.id)).innerHTML = `¡YA ESTÁS REGISTRADO!`
            } else {
                //Animación del botón de Inscripción
                $("#btnInscripcion" + carrera.id)
                    .slideUp(0)
                    .delay(0)
                    .slideDown(700)
                    .css({ "border": 0, "background-color": "black" })
                    .text("¡YA ESTÁS REGISTRADO!")

                //Las carreras se agregan al carrito
                carrito.push(carrera);
                carrera.estado = true;


                //Se muestras en el carrito las carreras
                let contenedor = document.getElementById("carritoCarreras");
                contenedor.innerHTML = " "
                htmlString = "<ul>";
                //Creación de cada carrera por separado en el Carrito
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

                //Se almacenan las carreras en el carrito
                localStorage.setItem('carrerasRegistradas', JSON.stringify(carrito));

                //Se muestran la cantidad de carreras registradas
                $(".tituloCarrito").text("CARRERAS REGISTRADAS (" + carrito.length + ")")

                //Función que elimina carreras del carrito
                quitarCarrera();

            }
        })
    })

}

//Función que elimina carreras del carrito
function quitarCarrera() {
    let borrarCarrera = document.getElementsByClassName("carrito__carreraTexto--quitar");
    for (const boton of borrarCarrera) {
        boton.onclick = () => {
            let id = boton.getAttribute("id");
            idNumber = id.split("_")
            carrito.splice(idNumber, 1)
            document.getElementById("carrera").remove()
            localStorage.setItem('carrerasRegistradas', JSON.stringify(carrito));
            $(".tituloCarrito").text("CARRERAS REGISTRADAS (" + carrito.length + ")")
        }
    }
    //Actualización de carreras en el carrito
    cargarCarrerasAlCarrito()
}