/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //ASIGNO mis dos variables, una con los iconos y otra con los números centrales:
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
  //voyt a crear la función que accederá a los iconos y números de manera aleatoria:
  function displayCards() {
    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  }
};
