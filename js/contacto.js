'use strict';

const btnEnviar = document.querySelector('#enviar');
const inputNombre = document.querySelector('#txt-Nombre');
const inputEmail = document.querySelector('#txt-Email');
const inputMensaje = document.querySelector('#txt-Mensaje');


//funcion

const validar = () => {

    let error = false;

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error');
    }

    if (inputEmail.value == '') {
        error = true;
        inputEmail.classList.add('error');
    }

    if (inputMensaje.value == '') {
        error = true;
        inputMensaje.classList.add('error');
    }


    if (error == true) {
        Swal.fire({

            icon: 'warning',
            title: 'Por favor complete los campos solicitados',
            showConfirmButton: false,
            timer: 19000,
        })
    }



};

// const obtenerDatos = () => {

//     let nombre = inputNombre.Value;
//     let email = inputEmail.value;
//     let mensaje = inputMensaje.value;



//     console.log(nombre, email, mensaje);


// };



btnEnviar.addEventListener('click', validar);