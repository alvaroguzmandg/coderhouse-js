        //verificamos el carrito del localstorage
        let carrerasRegistradas = localStorage.getItem("carrerasRegistradas")
        let carrito = [];
        if (carrerasRegistradas)
            carrito = JSON.parse(carrerasRegistradas)

        function cargarCarrerasAlCarrito() {

            carrera.forEach((carrera) => {
                let btn = document.getElementById(("btnInscripcion" + carrera.id));
                btn.addEventListener("click", () => {
                    if (carrera.estado) {
                        document.getElementById(("btnInscripcion" + carrera.id)).innerHTML = `¡YA ESTÁS REGISTRADO!`
                    } else {
                        document.getElementById(("btnInscripcion" + carrera.id)).innerHTML = `¡YA ESTÁS REGISTRADO!`
                        document.getElementById(("btnInscripcion" + carrera.id)).style.backgroundColor = "black";

                        //Carreras se agregan al carrito
                        carrito.push(carrera);
                        carrera.estado = true;

                        //Se muestras en el carrito las carreras
                        let contenedor = document.getElementById("carritoCarreras");
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
                        quitarCarrera();
                    }
                })
            })

        }

        function quitarCarrera() {
            let borrarCarrera = document.getElementsByClassName("carrito__carreraTexto--quitar");
            for (const boton of borrarCarrera) {
                boton.onclick = () => {
                    let id = boton.getAttribute("id");
                    idNumber = id.split("_")
                    carrito.splice(idNumber, 1)
                    document.getElementById("carrera").remove();
                    localStorage.setItem('carrerasRegistradas', JSON.stringify(carrito));
                }
            }
            cargarCarrerasAlCarrito()
        }