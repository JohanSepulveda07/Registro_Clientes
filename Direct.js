function redirect(event) {
    event.preventDefault(); 
    var tipoDocumento = document.getElementById('lang').value;
    var identificacion = document.getElementById('identificacion').value.trim();
    var nombres = document.getElementById('nombres').value.trim();
    var apellidos = document.getElementById('apellidos').value.trim();
    var correo = document.getElementById('correo electronico').value.trim();
    var usuario = document.getElementById('usuario').value.trim();
    var clave = document.getElementById('clave').value.trim();
    var confirmacionClave = document.getElementById('confirmacion_clave').value.trim();
    if (!tipoDocumento || !identificacion || !nombres || !apellidos || !correo || !usuario || !clave || !confirmacionClave) 
        {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos.',
        });
        return;
    }
    
    if (clave.length > 10 || clave.length < 7) {
        Swal.fire({
            icon: 'warning',
            title: 'Advertencia',
            text: 'La contraseña debe tener mínimo 7 caracteres y máximo 10 caracteres.',
        });
        return;
    }
    
    if (!(/^\d+$/.test(clave))) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe ser numérica (solo números).',
        });
        return;
    }
    
    if (clave !== confirmacionClave) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas no coinciden',
        });
        return;
    }

    if (!document.getElementById('checkbox').checked) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe aceptar los términos y condiciones',
        });
        return;
    }
  
    localStorage.setItem('nombres', nombres);
    localStorage.setItem('apellidos', apellidos);
    
    Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: 'Registro exitoso.',
    }).then(() => {
        window.location.href = 'index.html';
    });
}