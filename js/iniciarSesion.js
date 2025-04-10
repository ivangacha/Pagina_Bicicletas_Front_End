document.addEventListener("DOMContentLoaded", () => {
    // Captura el formulario de inicio de sesión por su clase
    const formLogin = document.querySelector(".iniciar-form");
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();

            // Captura los datos del formulario de inicio de sesión
            const datosLogin = {
                username: document.getElementById("username").value.trim(),
                password: document.getElementById("password").value.trim(),
            };

            // Muestra los datos en la consola
            console.log("Datos de inicio de sesión capturados:", datosLogin);

            // Muestra un mensaje de confirmación al usuario
            alert("¡Inicio de sesión exitoso!");
        });
    }
});