/* Hexadecimal
Cores formadas por:
Números = 0123456789 
Letras = A B C D E F
Laço de Repetição = FOR
Sempre começa com # */

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const corNova = new Set();

btn.addEventListener("click", function () {
  let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
}

  corNova.add(hexColor);
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 16);
}