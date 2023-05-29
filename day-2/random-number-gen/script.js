const number = document.querySelector(".number");

const generator = document.querySelector(".generate");

const generateNumber = () => {
  number.innerHTML = Math.trunc(Math.random() * 100 + 1);
};

generator.addEventListener("click", generateNumber);

generateNumber();
