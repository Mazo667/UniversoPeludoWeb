// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtén el formulario por su ID
    const form = document.getElementById('registro');
    const errorMessage = document.getElementById('mensajeError'); // Elemento para mostrar mensajes de error

    // Añade un evento 'submit' al formulario
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene el envío del formulario

            // Valores de los campos
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const fechaNacimiento = document.getElementById('fechaNacimiento').value;
            const dni = document.getElementById('dni').value;
            const domicilio = document.getElementById('domicilio').value;
            const localidad = document.getElementById('localidad').value;
            const numeroCelular = document.getElementById('numeroCelular').value;
            const email = document.getElementById('email').value;

            // Expresión regular para validar solo letras y espacios
            const letrasRegex = /^[a-zA-Z\s]+$/;
            // Expresión regular para validar solo números
            const numerosRegex = /^[0-9]+$/;

            if (nombre === '' || apellido === '' || fechaNacimiento === '' || dni === '' || domicilio === '' || localidad === '' || numeroCelular === '' || email === '') {
                errorMessage.textContent = 'Todos los campos son obligatorios.';// Comprueba si algún campo está vacío
            } else if (nombre.length < 3 || apellido.length < 3 || domicilio.length < 3 || localidad.length < 3 || numeroCelular.length < 10)  { 
                errorMessage.textContent = 'Error';//Valida que estos campos seleccionados tengan mas de 3 caracteres
            } else if  (!letrasRegex.test(nombre) || !letrasRegex.test(apellido)) {
                errorMessage.textContent = 'Solo puede contener letras y espacios.';//Valida que el nombre y el apellido no tenga caracteres especiales ni numeros
            } else if (!numerosRegex.test(numeroCelular) || !numerosRegex.test(dni)) {
                errorMessage.textContent = 'Solo puede contener numeros'; //Valida que estos campos solo contengan numeros
            } else if (!esMayorDeEdad(fechaNacimiento)) {
                errorMessage.textContent = 'Debes ser mayor de 18 años para registrarte.'; // Valido que el usuario sea mayor de edad
            } else {
                errorMessage.textContent = ''; // Limpia el mensaje de error si todo está bien
                // Guardar la información en el localStorage o sessionStorage para usar en el segundo paso
                localStorage.setItem('registroData', JSON.stringify({
                    nombre,
                    apellido,
                    fechaNacimiento,
                    dni,
                    domicilio,
                    localidad,
                    numeroCelular,
                    email
                }));
                // Redirigir al segundo formulario
                window.location.href = '8_contraseña_registrarse.html';
            }
        });
    }

    // VALIDACION DEL FORMULARIO CONTRASEÑA ------------------------------------------------------------------------------------------------------------------------
    
    const registrar_contraseña = document.getElementById('registrar_contraseña');
    const mensajeErrorContraseña = document.getElementById('mensajeErrorContraseña');

    if (registrar_contraseña) {
        registrar_contraseña.addEventListener('submit', function(event) {
            event.preventDefault();

            const password = document.getElementById('password').value;
            const confirmarPassword = document.getElementById('confirmarPassword').value;

            if (password === '' || confirmarPassword === '') {
                mensajeErrorContraseña.textContent = 'Este campo es obligatorio';
            } else if (password.length < 5) {
                mensajeErrorContraseña.textContent = 'Debe tener al menos 6 caracteres';
            } else if (password !== confirmarPassword) {
                mensajeErrorContraseña.textContent = 'Las contraseñas no coinciden';
            } else {
                mensajeErrorContraseña.textContent = '';
                // Recuperar la información del primer paso
                const registroData = JSON.parse(localStorage.getItem('registroData'));
                registroData.contraseña = password; // Aquí corregimos 'contraseña' por 'password'

                // Aquí puedes enviar registroData al servidor o realizar otra acción
                alert('Registro completado exitosamente');

                localStorage.removeItem('registroData'); // Limpiar el localStorage después del registro
                // Redirigir a la página de inicio de sesión o a otra página
                window.location.href = '7_iniciar-sesion.html';
            }
        });
    }

    function esMayorDeEdad(fechaNacimiento) { // Funcion para validar que el usuario sea mayor de edad
        const fechaActual = new Date();
        const fechaNac = new Date(fechaNacimiento);
        let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
        const mes = fechaActual.getMonth() - fechaNac.getMonth();
        const dia = fechaActual.getDate() - fechaNac.getDate();
    
        if (mes < 0 || (mes === 0 && dia < 0)) {
            edad--;
        }
    
        return edad >= 18;
    }
});



