let formulario = document.getElementById("formulario");
let elementos = formulario.elements;
let boton = document.getElementById("enviar");

let conExito = true;
let textAlert = "";

let in_validar = false;

const regexName = /\w+/
const regexEmail = /(.\w+@[a-zA-z]\w+\.[a-z]\w+)/;
const regexPhone = /(\(\+\d\w+\)\d\w+\-\d\w+)/;

$(document).ready(function(){
    let vNombre = (e)=>{
        if(formulario.nombre.value == ""){
            conExito = false;
            textAlert += "Ingrese un Nombre, "
            e.preventDefault();
        };
    };
    
    let vEmail = (e)=>{
        if (!regexEmail.test(formulario.email.value)){
            conExito = false;
            textAlert += "Correo, "
            e.preventDefault();
        };
    };
    
    let vTel = (e)=>{
        if(!regexPhone.test(formulario.tel.value)){
            conExito = false;
            textAlert += "Número de telefono válido"
            e.preventDefault();
        };
    };
    
    let validar = (e)=>{
        vNombre(e);
        vEmail(e);
        vTel(e);
        if(conExito){
            Swal.fire({
                icon: 'success',
                title: 'Datos enviados',
                timer: 1500,
                showConfirmButton: false
            });
            setTimeout(function(){in_validar=true},1500)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos',
                text: textAlert,
              });
        };
        textAlert = "";
        conExito = true;
    };
    if(in_validar){
        formulario.submit();
        formulario = false;
    };

    
    boton.addEventListener("click", validar);
})
