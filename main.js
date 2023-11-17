document.addEventListener('DOMContentLoaded', function () {
    const botonInicioSesion = document.getElementById('inicioSesion');
    const botonCerrarSesion = document.getElementById('cerrarSesion');
    const nombreUsuarioElemento = document.getElementById('nombreUsuario');

    // Lógica de inicio de sesión
    botonInicioSesion.addEventListener('click', function () {
        // Simplemente, redirige a la página de inicio de sesión por ahora
        window.location.href = 'login.html';
    });

    // Lógica de cierre de sesión
    botonCerrarSesion.addEventListener('click', function () {
        // Elimina el usuario del localStorage y actualiza la interfaz
        localStorage.removeItem('usuario');
        actualizarInterfazUsuario();
    });

    // Función para actualizar la interfaz del usuario (nombre y botones)
    function actualizarInterfazUsuario() {
        const usuarioGuardado = obtenerUsuario();
        
        if (usuarioGuardado) {
            // Si hay un usuario, muestra su nombre y el botón de cerrar sesión
            nombreUsuarioElemento.textContent = `¡Bienvenido, ${usuarioGuardado.nombres}!`;
            nombreUsuarioElemento.style.display = 'block';
            botonInicioSesion.style.display = 'none';
            botonCerrarSesion.style.display = 'inline-block';
        } else {
            // Si no hay usuario, oculta el nombre y muestra el botón de inicio de sesión
            nombreUsuarioElemento.style.display = 'none';
            botonInicioSesion.style.display = 'inline-block';
            botonCerrarSesion.style.display = 'none';
        }
    }

    // Llama a la función para actualizar la interfaz al cargar la página
    actualizarInterfazUsuario();
});