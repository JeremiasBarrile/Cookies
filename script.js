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

// Función para cambiar el idioma, el contenido y la imagen de la cookie
function cambiarIdioma() {
    let idioma = document.getElementById("idioma").value;
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo-intro");
    let imagen = document.querySelector(".imagen-intro");

    // Cambiar el texto según el idioma seleccionado
    switch(idioma) {
        case "es":
            titulo.textContent = "Bienvenidos a la Presentación de Cookies";
            parrafo.textContent = "Esta presentación trata sobre las cookies de los navegadores, que ayudan a recordar preferencias del usuario, como el idioma. ¡Elige tu idioma preferido a continuación!";
            imagen.src = "img/argentina.jpg"; // Cambiar imagen de cookie a una relacionada con España
            break;
        case "en":
            titulo.textContent = "Welcome to the Cookie Presentation";
            parrafo.textContent = "This presentation is about browser cookies, which help remember user preferences, such as language. Choose your preferred language below!";
            imagen.src = "img/uk.jpg"; // Cambiar imagen de cookie a una relacionada con EE.UU.
            break;
        case "fr":
            titulo.textContent = "Bienvenue à la Présentation des Cookies";
            parrafo.textContent = "Cette présentation concerne les cookies des navigateurs, qui aident à mémoriser les préférences de l'utilisateur, comme la langue. Choisissez votre langue préférée ci-dessous !";
            imagen.src = "img/france.jpg"; // Cambiar imagen de cookie a una relacionada con Francia
            break;
        case "pt":
            titulo.textContent = "Bem-vindo à Apresentação de Cookies";
            parrafo.textContent = "Esta apresentação trata dos cookies dos navegadores, que ajudam a lembrar as preferências do usuário, como o idioma. Escolha seu idioma preferido abaixo!";
            imagen.src = "img/matin.png"; // Cambiar imagen de cookie a una relacionada con Brasil
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

