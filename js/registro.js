document.addEventListener("DOMContentLoaded", () => {
    // Captura el formulario de registro por su id
    const formRegistro = document.getElementById("form-registro");
    if (formRegistro) {
        formRegistro.addEventListener("submit", (e) => {
            e.preventDefault();

            // Captura los datos del formulario de registro
            const datosRegistro = {
                email: document.getElementById("email").value.trim(),
                username: document.getElementById("username").value.trim(),
                password: document.getElementById("password").value.trim(),
            };

            // Muestra los datos en la consola
            console.log("Datos de registro capturados:", datosRegistro);

            // Muestra un mensaje de confirmación al usuario
            alert("¡Registro exitoso! Hemos recibido tu información.");
        });
    }
});