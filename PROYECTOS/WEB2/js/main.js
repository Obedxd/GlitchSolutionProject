document.addEventListener("DOMContentLoaded", function() {

  function validarFormulario() {
  var name = document.getElementById("nombres").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;

  if (name.trim() === "") {
    alert("Por favor, ingresa tu nombre completo");
    return;
  }

  if (email.trim() === "") {
    alert("Por favor, ingresa tu dirección de correo electrónico");
    return;
  }

  if (number.trim() === "") {
    alert("Por favor, ingresa tu número de teléfono");
    return;
  }

  // Agrega más validaciones según tus requisitos, como verificar el formato del correo electrónico o el número de teléfono

  // Si todas las validaciones pasan, puedes enviar el formulario o realizar otras acciones aquí
  alert("El formulario se ha enviado correctamente");
}
})
