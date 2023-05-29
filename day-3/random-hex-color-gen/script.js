const color = document.querySelector(".color");
const generator = document.querySelector(".generate");

const randomColorGen = () => {
  // let randomColor = "#" + Math.random().toString(16).slice(2, 8);
  let randomColor = "#" + Math.random().toString(16).substring(2, 8);
  color.innerHTML = randomColor;
  document.body.style.backgroundColor = randomColor;
};

generator.addEventListener("click", randomColorGen);

randomColorGen();
