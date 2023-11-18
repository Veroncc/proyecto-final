document.addEventListener('DOMContentLoaded', function () {
    const botonInicioSesion = document.getElementById('inicioSesion');
    const botonCerrarSesion = document.getElementById('cerrarSesion');
    const nombreUsuarioElemento = document.getElementById('nombreUsuario');

    botonInicioSesion.addEventListener('click', function () {
        window.location.href = 'login.html';
    });

    botonCerrarSesion.addEventListener('click', function () {
        localStorage.removeItem('usuario');
        actualizarInterfazUsuario();
    });

    function actualizarInterfazUsuario() {
        const usuarioGuardado = obtenerUsuario();
        
        if (usuarioGuardado) {
            nombreUsuarioElemento.textContent = `¡Bienvenido, ${usuarioGuardado.nombres}!`;
            nombreUsuarioElemento.style.display = 'block';
            botonInicioSesion.style.display = 'none';
            botonCerrarSesion.style.display = 'inline-block';
        } else {
            nombreUsuarioElemento.style.display = 'none';
            botonInicioSesion.style.display = 'inline-block';
            botonCerrarSesion.style.display = 'none';
        }
    }

    actualizarInterfazUsuario();
});