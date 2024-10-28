function validarFormulario() {
    // Obtener referencias a los campos del formulario
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var telefono = document.getElementById("telefono");
    var mensaje = document.getElementById("mensaje");

  
    // Validar los campos
    if (nombre.value === "") {
      alertify.error("Por favor, ingresa tu nombre.");
      return false;
    }
  
    if (email.value === "") {
      alertify.error("Por favor, ingresa tu correo electrónico.");
      return false;
    }

    if (telefono.value === "") {
        alertify.error("Por favor, ingresa tu telefono.");
        return false;
    }

    if (mensaje.value === "") {
        alertify.error("Por favor, ingresa un mensaje.");
        return false;
    }
  
    // Si todos los campos son válidos, puedes realizar otras acciones o enviar el formulario
    alert("Confirmar envio");
    return true;
  }
  