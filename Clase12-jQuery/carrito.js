//Carga Carrito DEL LOCALSTORAGE al cargar el DOM
$(() => {
    quitarCarrera()
    for (carreraRegistrada of carrito) {
        if (carreraRegistrada.nombre) {
            carreraRegistrada.estado = true;
        }
    }
})



//SLIDE DOWN/UP DEL CARRITO
let desplegar = false;
$("#bloqueCarrito").click(() => {
    if (desplegar) {
        $("#carritoCarreras").slideDown("fast");
    } else {
        $("#carritoCarreras").slideUp("fast");
    }
    desplegar = !desplegar;
})