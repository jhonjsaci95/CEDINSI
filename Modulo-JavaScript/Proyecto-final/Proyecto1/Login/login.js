document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-button");
    const content = document.getElementById("content");

    loginButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Realizar verificación de credenciales aquí (simulado en este ejemplo).
        if (username === "manager" && password === "1234567") {
            overlay.style.display = "none"; // Ocultar la superposición modal
            content.style.display = "block"; // Mostrar el contenido protegido
        } else {
            alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        }
    });

    // Mostrar la superposición modal inicialmente (bloquea la página)
    overlay.style.display = "block";
});
