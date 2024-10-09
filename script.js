// Función para establecer una cookie con un tiempo de expiración
function setCookie(name, value, minutes) {
    const d = new Date();
    d.setTime(d.getTime() + (minutes * 60 * 1000)); // Expira en X minutos
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") == 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

// Función para cambiar el idioma y guardar la preferencia en una cookie
function cambiarIdioma() {
    let idioma = document.getElementById("idioma").value;
    let titulo = document.getElementById("titulo");

    // Cambiar el texto según el idioma seleccionado
    switch(idioma) {
        case "es":
            titulo.textContent = "Bienvenidos a la Presentación de Cookies";
            break;
        case "en":
            titulo.textContent = "Welcome to the Cookie Presentation";
            break;
        case "fr":
            titulo.textContent = "Bienvenue à la Présentation des Cookies";
            break;
    }

    // Guardar la preferencia en una cookie que expira en 30 minutos
    setCookie("idiomaPreferido", idioma, 30);
}

// Función para cargar la preferencia de idioma desde la cookie si existe
function cargarPreferenciaIdioma() {
    let idioma = getCookie("idiomaPreferido");
    if (idioma) {
        document.getElementById("idioma").value = idioma;
        cambiarIdioma(); // Aplicar la preferencia almacenada
    }
}

// Cargar la preferencia de idioma cuando se carga la página
window.onload = cargarPreferenciaIdioma;
