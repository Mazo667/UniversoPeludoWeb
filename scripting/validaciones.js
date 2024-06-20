function esNombreValido (nombre){
    const validacionNombre = /^[a-zA-Z\s]+$/;
    if (nombre.length < 3) {
        return false;
    }
    return validacionNombre.test(nombre);
}

function esApellidoValido (apellido) {
    const validacionApellido = /^[a-zA-Z\s]+$/;
    if (apellido.length < 3) {
        return false;
    }
    return validacionApellido.test(apellido);
}

function esNacimientoValido (fechaNacimiento) {
    if (!esMayorDeEdad(fechaNacimiento)) {
        return false;
    }
    return true;
}

function esDNIValido (dni){
    const validacionDNI = /^[0-9]{8,9}$/;
    return validacionDNI.test(dni);
}

function esDomicilioValido (domicilio) {
    const validacionDomicilio = /^[A-Za-z0-9\s]+$/;
    return validacionDomicilio.test(domicilio);
}

function esLocalidadValido (localidad){
    const validacionLocalidad = /^[a-zA-Z\s]+$/;
    if (localidad.length < 3){
        return false;
    }
    return validacionLocalidad.test(localidad);
}

function esNroCelularValido (numeroCelular) {
    const validacionNumero = /^[0-9]{10}$/;
    return validacionNumero.test(numeroCelular);
}

function esEmailValido (email) {
    const validacionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validacionEmail.test(email);
}

function esPasswordValido(password, confirmarPassword) {
    if (password !== confirmarPassword) {
        return false;
    }
    return true; /*REVISAR*/
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
