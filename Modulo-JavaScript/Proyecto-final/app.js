// Evento al enviar el formulario de registro
document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se recargue la página

    // Validaciones básicas
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let ciudad = document.getElementById('ciudad').value;

    if (nombre === "" || email === "" || ciudad === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Si todo está bien, mostramos el mensaje de registro exitoso
    alert(`Registro exitoso. Bienvenido ${nombre}`);

    // Consumir API del clima y obtener coordenadas
    obtenerClimaYCoordenadas(ciudad);
});

// Función para obtener clima y coordenadas de la ciudad
function obtenerClimaYCoordenadas(ciudad) {
    let apiKey = 'cabbb1db22a7bce12946d8ff06f60481'; // Tu clave de OpenWeather
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Manipular el DOM para mostrar el clima
            let climaDiv = document.getElementById('clima');
            if (data.cod === 200) { // Si el código de respuesta es exitoso
                climaDiv.innerHTML = `
                <p>Ciudad: ${data.name}</p>
                <p>Temperatura: ${data.main.temp} °C</p>
                <p>Descripción: ${data.weather[0].description}</p>
            `;

                // Obtener las coordenadas de la ciudad
                let latitud = data.coord.lat;
                let longitud = data.coord.lon;

                // Llamar a la API de tráfico con las coordenadas
                obtenerTrafico(latitud, longitud);
            } else {
                climaDiv.innerHTML = `<p>No se pudo obtener el clima de la ciudad.</p>`;
            }
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
            document.getElementById('clima').innerHTML = `<p>Error al obtener el clima.</p>`;
        });
}

// Función para obtener el tráfico basado en las coordenadas de la ciudad
function obtenerTrafico(latitud, longitud) {
    let apiKeyTomTom = 'KUKRQ4qywG0UcHia1cvOAnuDIVPq5YME'; // Tu clave de TomTom
    let urlTomTom = `https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json?point=${latitud},${longitud}&key=${apiKeyTomTom}`;

    fetch(urlTomTom)
        .then(response => response.json())
        .then(data => {
            // Manipular el DOM para mostrar el tráfico
            let traficoDiv = document.getElementById('trafico');
            if (data && data.flowSegmentData) {
                let congestion = data.flowSegmentData.currentSpeed; // Velocidad actual en el tráfico
                let velocidadLibre = data.flowSegmentData.freeFlowSpeed; // Velocidad en condiciones libres

                traficoDiv.innerHTML = `
                <p>Velocidad actual: ${congestion} km/h</p>
                <p>Velocidad en condiciones libres: ${velocidadLibre} km/h</p>
                <p>Nivel de congestión: ${((velocidadLibre - congestion) / velocidadLibre * 100).toFixed(2)}%</p>
            `;
            } else {
                traficoDiv.innerHTML = `<p>No se pudo obtener información de tráfico.</p>`;
            }
        })
        .catch(error => {
            console.error('Error al obtener el tráfico:', error);
            document.getElementById('trafico').innerHTML = `<p>Error al obtener el tráfico.</p>`;
        });
}
