
function obtenerJuegosDisponibles() {
  let juegosdispo = prompt("Ingrese 'JUEGOS' para ver la lista de juegos disponibles");
  return juegosdispo && juegosdispo.toLowerCase() === "juegos";
}

function obtenerJuegoIngresado() {
  let juegoingresado = prompt(
    "Ingrese el nombre de un juego de la lista para ver su precio real con IVA (" +
      juegosvalidos.join(", ") +
      ")"
  );
  return juegoingresado;
}

let juegosvalidos = [
  "FIFA 24",
  "Halo Infinite",
  "Cyberpunk 2077",
  "Elden Ring",
  "Horizon Forbidden West",
  "Starfield",
];

let precios = {
  "FIFA 24": 21066.21,
  "Halo Infinite": 21149.60,
  "Cyberpunk 2077": 11269.99,
  "Elden Ring": 1259.99,
  "Horizon Forbidden West": 969.99,
  "Starfield": 1559.99,
};

let IVA = 0.75;

while (true) {
if (obtenerJuegosDisponibles()) {
  alert("Juegos disponibles: " + juegosvalidos.join(", "));
  break
 } else {
  alert("Por favor, ingrese 'JUEGOS'.");
 }
}


let juegoingresado;
while (true) {
  juegoingresado = obtenerJuegoIngresado();

  if (juegosvalidos.includes(juegoingresado)) {
    let precioJuego = precios[juegoingresado];
    let precioConIVA = precioJuego * (1 + IVA);
    console.log("El valor de " + juegoingresado + " es de " + precioConIVA.toFixed(2) + " AR$ pesos argentinos");
    break;
  } else {
    alert("Juego no válido. Por favor, ingrese un juego de la lista.");
  }
}

