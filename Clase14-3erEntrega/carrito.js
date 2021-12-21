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
$("#bloqueCarrito").click(desplegarCarrito)

function desplegarCarrito() {
    if (desplegar) {
        $("#carritoCarreras").slideDown("slow")
    } else {
        $("#carritoCarreras").slideUp("fast");
    }
    desplegar = !desplegar;
}