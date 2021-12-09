//Creación de encabezado de Usuario
let tituloUsuario = document.createElement("span");
tituloUsuario.classList.add("bloqueUsuario");
tituloUsuario.id = "bloqueUsuario";
document.getElementById("headerUsuario").appendChild(tituloUsuario);

//Creación de espacio de usuario
let nombreUsuario = document.createElement("h2");
nombreUsuario.classList.add("nombreUsuario")

// Aplicación de Nombre registrado de usuario
nombre = localStorage.getItem("usuario");
nombreUsuario.textContent = "Bienvenido " + nombre;
tituloUsuario.appendChild(nombreUsuario);


//Creación de botón de cerrar sesión
let btnCerrarSesion = document.createElement("button");
btnCerrarSesion.id = "btn";
btnCerrarSesion.classList.add("btCerrarSesion");
btnCerrarSesion.textContent = "Cerrar Sesión";
tituloUsuario.appendChild(btnCerrarSesion);

let btn = document.getElementById("btn")
btn.onclick = () => cerrarSesion();


//Función de cerrar sesión
function cerrarSesion() {
    window.location.replace("registro-usuario.html");
}


//Creación de bloque de carrito
let contenedorCarrito = document.createElement("div");
contenedorCarrito.classList.add("contenedorCarrito");
contenedorCarrito.id = "contenedorCarrito";
document.getElementById("headerUsuario").appendChild(contenedorCarrito);

//Contenedor del acceso al carrito
let bloqueCarrito = document.createElement("span");
bloqueCarrito.classList.add("bloqueCarrito");
bloqueCarrito.id = "bloqueCarrito";
contenedorCarrito.appendChild(bloqueCarrito);

//Imagen del icono del carrito
let iconoCarrito = document.createElement('img');
iconoCarrito.src = "arquivos/ic-carrito.png";
iconoCarrito.textContent = "carrito";
iconoCarrito.classList.add("iconoCarrito")
bloqueCarrito.appendChild(iconoCarrito);

//Titulo del icono del carrito
let tituloCarrito = document.createElement("span");
tituloCarrito.classList.add("tituloCarrito")
tituloCarrito.textContent = "CARRERAS REGISTRADAS";
bloqueCarrito.appendChild(tituloCarrito);


//Creacion de Contenedor de carrito de carreras
let carritoCarreras = document.createElement("div");
carritoCarreras.id = "carritoCarreras";
contenedorCarrito.appendChild(carritoCarreras)


///Titulo en el carrito
let tituloCarrerasRegistradas = document.createElement("span");
tituloCarrerasRegistradas.classList.add("tituloCarrito")
tituloCarrerasRegistradas.textContent = "CARRERAS REGISTRADAS";
carritoCarreras.appendChild(tituloCarrerasRegistradas);


//Revisa carreras Almacenadas en LocalStorage y las carga al Carrito
if (localStorage.getItem('carrerasRegistradas') === null) {
    carrerasAlmacenadasArray = []
} else {

    let carrerasAlmacenadas = localStorage.getItem('carrerasRegistradas');
    let carrerasAlmacenadasArray = JSON.parse(carrerasAlmacenadas);

    let contenedor = document.getElementById("carritoCarreras");
    contenedor.innerHTML = " "
    htmlString = "<ul>";

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


// MouseOver Carreras Registradas
let verCarreras = document.getElementById("contenedorCarrito")
verCarreras.onmouseover = () => {
    carritoCarreras.style.display = "block";

}
verCarreras.onmouseout = () => {
    carritoCarreras.style.display = "none";
}