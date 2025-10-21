const imagens = [
  "url('Imagem01.jpg')",
  "url('Imagem02.jpg')",
  "url('Imagem03.jpg')"
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundImage = imagens[randomNumber];
  color.textContent = `Imagem ${randomNumber}`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * imagens.length);
} 