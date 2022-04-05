/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.displayCards = function displayCards() {
  //write your code here
  //ASIGNO mis dos variables, una con los iconos y otra con los números centrales:
  //voy a crear la función que accederá a los iconos y números de manera aleatoria:

  const cards = ["♦", "♥", "♠", "♣"];
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
  document.querySelector(".card").innerHTML = ` <div class="card">
    <div class="row" id="row1">
      <span class="item1">${singleCard}</span>
    </div>
    <div class="row" id="row2">
      <p>${singleNumbers}</p>
    </div>
    <div class="row" id="row3">
      <span class="item2">${singleCard}</span>
    </div>
  </div>`;
};
