import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector(".boton").addEventListener("click", () => {
    document.querySelector(".number").innerHTML = cartas();
    let randomCard = typeCard();
    document.querySelector(".up").innerHTML = randomCard;
    document.querySelector(".down").innerHTML = randomCard;
  });
};
function cartas() {
  const valueCard = [
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
  function randomValue(a) {
    for (let i = valueCard.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      return a[rand];
    }
  }
  return randomValue(valueCard);
}

function typeCard() {
  const type = ["\u2665", "\u2666", "\u2660", "\u2663"];
  function randomType(array) {
    for (let i = type.length - 1; i > 0; i--) {
      let newColor = document.querySelector(".up");
      let newColor1 = document.querySelector(".down");
      let rand = Math.floor(Math.random() * (i + 1));
      if (array[rand] == "\u2665" || array[rand] == "\u2666") {
        newColor.classList.replace("text-dark", "text-danger");
        newColor1.classList.replace("text-dark", "text-danger");
      } else if (array[rand] == "\u2660" || array[rand] == "\u2663") {
        newColor.classList.replace("text-danger", "text-dark");
        newColor1.classList.replace("text-danger", "text-dark");
      }
      return array[rand];
    }
  }
  return randomType(type);
}
