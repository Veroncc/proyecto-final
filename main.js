// Manejo del localStorage
function guardarUsuario(nombres, apellidos, correo, contraseña, genero) {
    const usuario = {
        nombres,
        apellidos,
        correo,
        contraseña,
        genero
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));
}

function obtenerUsuario() {
    const usuarioGuardado = localStorage.getItem('usuario');
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
}

function redirigirAIndex() {
    const nombreUsuario = obtenerUsuario()?.nombres;
    if (nombreUsuario) {
        // Redirigir a la página principal con el nombre del usuario
        window.location.href = `index.html?nombre=${nombreUsuario}`;
    } else {
        // Si no hay usuario registrado, redirigir a la página de inicio de sesión
        window.location.href = 'login.html';
    }
}

// Página de registro
const formularioRegistro = document.getElementById('formularioRegistro');
formularioRegistro.addEventListener('submit', function (event) {
    event.preventDefault();
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const genero = document.getElementById('genero').value;

    guardarUsuario(nombres, apellidos, correo, contraseña, genero);

    // Redirigir a la página principal
    redirigirAIndex();
});

// Página de inicio de sesión
const formularioInicioSesion = document.getElementById('formularioInicioSesion');
formularioInicioSesion.addEventListener('submit', function (event) {
    event.preventDefault();
    const correo = document.getElementById('correoInicio').value;
    const contraseña = document.getElementById('contraseñaInicio').value;

    const usuarioGuardado = obtenerUsuario();

    if (usuarioGuardado && usuarioGuardado.correo === correo && usuarioGuardado.contraseña === contraseña) {
        // Redirigir a la página principal con el nombre del usuario
        redirigirAIndex();
    } else {
        alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
});

// Actualizar el menú de navegación con el nombre del usuario
const nombreUsuario = obtenerUsuario()?.nombres;
if (nombreUsuario) {
    const menuNavegacion = document.querySelector('nav ul');
    const cerrarSesionHTML = `<li><a href="#" id="cerrarSesion">Cerrar Sesión</a></li>`;
    const nombreUsuarioHTML = `<li><span>Bienvenido, ${nombreUsuario} </span></li>`;
    menuNavegacion.innerHTML += nombreUsuarioHTML + cerrarSesionHTML;

    // Agregar evento para cerrar sesión
    const cerrarSesion = document.getElementById('cerrarSesion');
    cerrarSesion.addEventListener('click', function () {
        localStorage.removeItem('usuario');
        window.location.href = 'index.html';
    });
} else {
    // Si no hay usuario registrado, redirigir a la página de inicio de sesión
    window.location.href = 'login.html';
}