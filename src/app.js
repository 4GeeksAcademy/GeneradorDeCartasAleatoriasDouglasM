function generarCarta() {
  let palos = ["spade", "club", "heart", "diamond"];

  let valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

  let valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  return { valor: valorAleatorio, palo: paloAleatorio };
}

function nuevaCarta() {
  let cartaGenerada = generarCarta();
  document.getElementById("valor").innerHTML = cartaGenerada.valor;
  document.getElementById("palo1").className =
    "palo divPalo1 " + cartaGenerada.palo;
  document.getElementById("palo2").className =
    "palo divPalo2 " + cartaGenerada.palo;
}

function dimensiones() {
  let ancho = document.getElementById("sliderAncho").value;
  let alto = document.getElementById("sliderAlto").value;
  document.getElementById("carta").style.width = ancho + "px";
  document.getElementById("carta").style.height = alto + "px";
}

const botonCarta = document.getElementById("cambiarCarta");
botonCarta.addEventListener("click", nuevaCarta);

document.getElementById("sliderAncho").addEventListener("input", dimensiones);
document.getElementById("sliderAlto").addEventListener("input", dimensiones);

setInterval(nuevaCarta, 10000);

nuevaCarta();
