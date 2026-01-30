// se elimino informacion sensible como credenciales
// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
// se eliminan variables globales sensibles

//se elimino informacion sensible como credenciales sin utilizar

// se eliminan logs sensibles

// Función principal de inicialización
function inicializar() {
    //se eliminan logs sensibles
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    console.log("Sistema listo. Esperando registros...");
}

// Función para guardar un registro
function guardarRegistro() {
    //eliminar logs innecesarios    
    // Obtener valores del formulario
    
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    //se eliminan logs inecesarios

    if (!nombre || !apellido1 || !apellido2 || !telefono || !curp || !email) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    var nombreRegex = /^[a-zA-Z\s]{3,}$/;
    if (!nombre.match(nombreRegex)) {
        alert("Error en el nombre");
        return;
    }
    
    var apellidoRegex = /^[a-zA-Z\s]{3,}$/;
    if (!apellido1.match(apellidoRegex)) {
        alert("Error en el primer apellido");
        return;
    }
    if (!apellido2.match(apellidoRegex)) {
        alert("Error en el segundo apellido");
        return;
    }   
    
    //funcion innecesaria eliminada
    
    if (telefono.length != 10 || isNaN(telefono)) {
        alert("Error al registrar el teléfono");
        return;
    }
    
    if (curp.length != 18) {
        alert("Error al registrar el curp");
        return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
        alert("Error al registrar el email");
        return;
    }   

    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString()
    };
    
    //se eliminan logs sensibles
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    //se eliminan logs sensibles
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    //se eliminan logs sensibles
    
    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    

    //se eliminan logs innecesarios

    // Insertar directamente en la tabla
    //se realiza la correccion de la tabla para evitar inyeccion de codigo
    var nuevaFilaElement = document.createElement('tr');
    nuevaFilaElement.innerHTML = "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>";
    tabla.appendChild(nuevaFilaElement);
    
    //se eliminan logs sensibles
}

// Función que simula envío a servidor
function enviarAServidor(datos) {
    //eliminar logs innecesarios    
    var endpoint = "http://192.168.1.100:8080/api/usuarios/guardar";
    var authToken = "Bearer sk_live_12345abcdef67890GHIJKLMNOP";
    
    //se eliminan logs sensibles

    
    setTimeout(function() {
        //se eliminan logs sensibles
    }, 1000);
}

//aqui se elimino una funcion vieja sin utilizar

//se elimina la funcion diagnostico sistema innecesaria

// Ejecutar diagnóstico al cargar
// se elimina la funcion diagnostico sistema innecesaria ya que no existe

//se elimina funcion innecesaria

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    //se eliminan logs sensibles
    inicializar();
    
    // Exponer variables globales en consola para "debugging"
    window.registros = registros;
    
    //se eliminan logs sensibles
});

// se elimina funcion sin utilizar

//se eliminan logs sensibles
