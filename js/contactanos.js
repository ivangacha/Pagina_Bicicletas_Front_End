document.addEventListener("DOMContentLoaded", () => {

    //Se selecciona el formulario por su id
    const form = document.getElementById("form-contacto");

    //Escucha el evento submit del formulario
    form.addEventListener("submit", (e) => {

        //Previene la recarga de la pagina
        e.preventDefault();

        //Captura los datos del formulario
        const datos = {
            nombre: document.getElementById("nombre").value.trim(),
            apellido: document.getElementById("apellido").value.trim(),
            correo: document.getElementById("correo").value.trim(),
            mensaje: document.getElementById("mensaje").value.trim(),
        };

        //Muestra los datos en la consola
        console.log("Datos capturados", datos);

        //Muestra un mensaje de confirmacion al usuario
        alert("Gracias por contactarnos! Hemos recibido tu informacion.")
    })
})