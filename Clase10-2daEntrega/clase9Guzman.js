//Constructor de corredor
class Corredor {
    constructor(nombre, apellido, edad, carrera) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
    }
}

//Arrays de Corredores según la carrera
let corredores42k = []
let corredores21k = []


//Acción del botón de registro
let formularioRegistro = document.getElementById("formularioRegistro")
formularioRegistro.addEventListener("submit", respuestaClick);

function respuestaClick(event) {
    event.preventDefault();

    let elemento = event.target;

    nombreCorredor = elemento.children[0].value;
    apellidoCorredor = elemento.children[1].value;
    edadCorredor = elemento.children[2].value;
    carrera = parseInt(elemento.children[3].value);

    switch (carrera) {
        case 2:
            carrera = "21k de Buenos Aires"
            break;
        case 1:
            carrera = "42k de Buenos Aires"
            break;
    }

    corredor = new Corredor(nombreCorredor, apellidoCorredor, edadCorredor, carrera);

    //Función para agregar al corredor al listado de inscriptos
    agregarCorredor();

    //Función para limpiar formulario después de enviar
    formularioRegistro.reset();
}

function agregarCorredor() {
    let bloqueUsuario = document.createElement("div");
    bloqueUsuario.id = "corredoresRegistrados";
    bloqueUsuario.innerHTML = `
    <span class="info_corredor">${corredor.nombre} ${corredor.apellido} </span>
    <span class="info_titulo">EDAD</span>
    <span class="info_corredor">${corredor.edad} años</span>
    <span class="info_titulo">CARRERA</span>
    <span class="info_corredor">${corredor.carrera}</span>
    `;

    document.getElementById("carreras").appendChild(bloqueUsuario);

    // Condicional para agregar al inscripto en el Array que corresponda
    if (corredor.carrera == "42k de Buenos Aires") {
        corredores42k.push(new Corredor(nombreCorredor, apellidoCorredor, edadCorredor, carrera));
    } else {
        corredores21k.push(new Corredor(nombreCorredor, apellidoCorredor, edadCorredor, carrera));
    }


}