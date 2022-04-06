/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let Button = document.querySelector("button");
Button.onclick = function displayCards() {
  //write your code here
  //ASIGNO mis dos variables, una con los iconos y otra con los números centrales:
  //voy a crear la función que accederá a los iconos y números de manera aleatoria:

  const cards = [
    "src/img/heart_red.png",
    "src/img/trebol.png",
    "src/img/rombo_rojo.png",
    "src/img/Picas.png"
  ];
  //var cards = ["<div class='palo rojo'>♥</div>", "<div class='palo rojo'>♦</div>", "<div class='palo negro'>♣</div>", "<div class='palo negro'>♠</div>"];
  //const cards = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let singleCard = cards[Math.floor(Math.random() * cards.length)];
  let singleNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  // restablecer el cuerpo del sitio web con la nueva salida html:
  document.querySelector(".card").innerHTML = ` <div class="row" id="row1">
      <img src='${singleCard}' class="item1" />
    </div>
    <div class="row" id="row2">
      <p>${singleNumbers}</p>
    </div>
    <div class="row" id="row3">
    <img src='${singleCard}' class="item2" />
    </div>`;
};
