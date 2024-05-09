function generarCarta() {
  let palos = [
    "<i class='fas fa-heart fa-2xs' style='color: #f40101;'></i>",
    "<i class='fa-solid fa-diamond fa-2xs' style='color: #f50000;'></i>",
    "&clubs;",
    "&spades;"
  ];

  let valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

  let valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  return { valor: valorAleatorio, palo: paloAleatorio };
}

let cartaElemento = document.getElementById("carta");

let cartaGenerada = generarCarta();
cartaElemento.querySelector("#valor").innerHTML = cartaGenerada.valor;
cartaElemento.querySelector("#palo1").innerHTML = cartaGenerada.palo;
cartaElemento.querySelector("#palo2").innerHTML = cartaGenerada.palo;
