document.addEventListener('DOMContentLoaded', function () {
    const juegosvalidos = [
        {
            Juego: "FIFA 24",
            Precios: 21066.21,
            Categoria: "deportes",
            Jugadores: ["un jugador", "multijugador"],
        },
        {
            Juego: "Halo Infinite",
            Precios: 21149.60,
            Categoria: "disparos",
            Jugadores: ["un jugador", "multijugador"],
        },
        {
            Juego: "Cyberpunk 2077",
            Precios: 11269.99,
            Categoria: ["disparos", "modo historia"],
            Jugadores: ["un jugador"],
        },
        {
            Juego: "Elden Ring",
            Precios: 1259.99,
            Categoria: "estrategia",
            Jugadores: ["un jugador"],
        },
        {
            Juego: "Horizon Forbidden West",
            Precios: 969.99,
            Categoria: "modo historia",
            Jugadores: ["un jugador"],
        },
        {
            Juego: "Starfield",
            Precios: 1559.99,
            Categoria: "aventura",
            Jugadores: ["un jugador"],
        },
    ];


    let IVA = 0.75;

    const juegosContainer = document.getElementById('juegosContainer');

    juegosvalidos.forEach((juego) => {
        const juegoDiv = document.createElement('div');
        juegoDiv.innerHTML = `<p>${juego.Juego} (${juego.Categoria}, ${juego.Jugadores.join(', ')})</p>`;
        
        const mostrarPrecioBtn = document.createElement('button');
        mostrarPrecioBtn.textContent = 'Mostrar Precio';
        
        const precioContainer = document.createElement('div');
        precioContainer.classList.add('precioContainer');

        mostrarPrecioBtn.addEventListener('click', function () {
            togglePrecio(juego, precioContainer);
        });

        juegoDiv.appendChild(mostrarPrecioBtn);
        juegoDiv.appendChild(precioContainer);
        juegosContainer.appendChild(juegoDiv);
    });

    function togglePrecio(juego, precioContainer) {
        let precioConIVA = juego.Precios * (1 + IVA);
        if (precioContainer.style.display === 'none') {
            precioContainer.innerHTML = `<p>El valor de ${juego.Juego} es de ${precioConIVA.toFixed(2)} AR$ pesos argentinos</p>`;
            precioContainer.style.display = 'block';
            // Guardar en localStorage
            localStorage.setItem(`mostrar-precio-${juego.Juego}`, 'activado');
        } else {
            precioContainer.style.display = 'none';
            // Guardar en localStorage
            localStorage.setItem(`mostrar-precio-${juego.Juego}`, 'desactivado');
        }
    }

    // Recuperar estado desde localStorage
    juegosvalidos.forEach((juego) => {
        const estado = localStorage.getItem(`mostrar-precio-${juego.Juego}`);
        if (estado === 'activado') {
            // Si el estado es 'activado', mostrar el precio
            const precioContainer = juegosContainer.querySelector(`[data-juego="${juego.Juego}"] .precioContainer`);
            if (precioContainer) {
                togglePrecio(juego, precioContainer);
            }
        }
    });
});