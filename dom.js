// HTML LINK CON CSS PARA EL BUTTON DE MOSTRAR MAS

let hidetext_btn = document.getElementById('hideText_btn')

let hidetext = document.getElementById('hideText')

hidetext_btn.addEventListener('click', toggleText);



function toggleText() {
    hidetext.classList.toggle('show')

    if (hidetext.classList.contains('show')) {
        hidetext_btn.innerHTML = "Mostrar Menos"
    }
    else {
    hidetext_btn.innerHTML = "Mostrar Mas"
    }
}


// LOCALSTORAGE ON CLICK //


const botonReadMore = document.getElementById("hideText_btn");
const body = document.body;

let MostrarMas = localStorage.getItem("hideText_btn");

function activarMostrarMas() {
    body.classList.add("mostrar-mas");
    localStorage.setItem("mostrar-mas", "activado");
}

function desactivarMostrarMas() {
    body.classList.remove("mostrar-mas");
    localStorage.setItem("mostrar-mas", "desactivado");
}

if (botonReadMore === "activado") {
    activarMostrarMas();
} else {
    desactivarMostrarMas();
}

botonReadMore.addEventListener("click", () => {
    MostrarMas = localStorage.getItem("mostrar-mas");

    if (MostrarMas === "activado") {
        desactivarMostrarMas();
    } else {
        activarMostrarMas();
    }
}
)
