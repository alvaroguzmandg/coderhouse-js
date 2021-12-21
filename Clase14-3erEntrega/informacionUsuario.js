//Construcción del header de usuario
let nombre = localStorage.getItem("usuario");
$("#encabezadoUsuario").append(`
<div id="headerUsuario" class="headerUsuario">
    <span class="bloqueUsuario" id="bloqueUsuario">
        <h2 class="nombreUsuario">Bienvenido ${nombre}</h2>
        <button id="btn" class="btCerrarSesion">Cerrar Sesión</button>
    </span>
    <div class="contenedorCarrito" id="contenedorCarrito">
        <span class="bloqueCarrito" id="bloqueCarrito">
            <img src="arquivos/ic-carrito.png" class="iconoCarrito">
            <span class="tituloCarrito">CARRERAS REGISTRADAS</span>
        </span>
        <div id="carritoCarreras" style="display: none;">
            <ul>
                
            </ul>
        </div>
    </div>
</div>
`);


//Función de cerrar sesión
$("#btn").click(function cerrarSesion() {
    window.location.replace("registro-usuario.html");
});


//Revisa carreras Almacenadas en LocalStorage y las carga al Carrito
if (localStorage.getItem('carrerasRegistradas') === null) {
    carrerasAlmacenadasArray = []
} else {

    let carrerasAlmacenadas = localStorage.getItem('carrerasRegistradas');
    let carrerasAlmacenadasArray = JSON.parse(carrerasAlmacenadas);

    let contenedor = document.getElementById("carritoCarreras");
    contenedor.innerHTML = " "
    htmlString = "<ul>";

    //Carga de cada carrera por separado en el Carrito
    for (let index = 0; index < carrerasAlmacenadasArray.length; index++) {

        foto = carrerasAlmacenadasArray[index].foto;
        nombre = carrerasAlmacenadasArray[index].nombre
        fecha = carrerasAlmacenadasArray[index].fecha
        id = carrerasAlmacenadasArray[index].id

        htmlString += `<li id="carrera">
                    <span class="carrito__carreraImagen"><img src="${foto}"></span>
                    <span class="carrito__carreraTexto">
                        <span class="carrito__carreraTexto--titulo">${nombre}</span>
                        <span class="carrito__carreraTexto--fecha">${fecha}</span>
                        <span id="quitar_${id}" class="carrito__carreraTexto--quitar">Quitar Carrera</span>
                    </span>
                    </li>
                    `



    }
    htmlString += "</ul>"
    contenedor.innerHTML = htmlString
}