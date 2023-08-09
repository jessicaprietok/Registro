document.getElementById("regBtn").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;

    const alertSuccess = document.getElementById("alert-success");
    const alertError = document.getElementById("alert-danger");

    // Verificar campos vacíos
    if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "" || !terminos) {
        showAlertError();
        return;
    }

    // Verificar longitud de contraseña
    if (password1.length < 6) {
        showAlertError();
        return;
    }

    // Verificar que las contraseñas coincidan
    if (password1 !== password2) {
        showAlertError();
        return;
    }

    // Mostrar alerta de éxito si se cumplieron todas las condiciones
    showAlertSuccess();
});

// Función para mostrar la alerta de éxito
function showAlertSuccess() {
    const alertSuccess = document.getElementById("alert-success");
    alertSuccess.style.display = "block";
    setTimeout(function () {
        alertSuccess.style.display = "none";
    }, 3000);
}

// Función para mostrar la alerta de error
function showAlertError() {
    const alertError = document.getElementById("alert-danger");
    alertError.style.display = "block";
    setTimeout(function () {
        alertError.style.display = "none";
    }, 3000);
}
