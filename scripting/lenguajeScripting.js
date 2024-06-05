// Espera a que el documento esté completamente cargado
registrarse.addEventListener("DOMContentLoaded", function() {
    // Obtén el formulario por su ID
    const form = registrarse.getElementById('registro');
    const errorMessage = registrarse.getElementById('mensajeError'); // Elemento para mostrar mensajes de error

    // Añade un evento 'submit' al formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario

        // Obtén los valores de los campos
        const nombre = registrarse.getElementById('nombre').value;
        const apellido = registrarse.getElementById('apellido').value;
        const fechaNacimiento = registrarse.getElementById('fechaNacimiento').value;
        const dni = registrarse.getElementById('dni').value;
        const domicilio = registrarse.getElementById('domicilio').value;
        const localidad = registrarse.getElementById('localidad').value;
        const numeroCelular = registrarse.getElementById('numeroCelular').value;
        const email = registrarse.getElementById('email').value;

        // Comprueba si algún campo está vacío
        if (nombre === '' || apellido === '' || fechaNacimiento === '' || dni === '' || domicilio === '' || localidad === '' || numeroCelular === '' || email === '') {
            errorMessage.textContent = 'Todos los campos son obligatorios.';
        } else {
            errorMessage.textContent = ''; // Limpia el mensaje de error si todo está bien
            alert('Formulario enviado exitosamente');
            form.submit(); // Envía el formulario si pasa todas las validaciones
        }
    });
});

