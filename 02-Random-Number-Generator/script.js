const generator = document.querySelector(".btn");

function handleClick() {
  const num = Math.trunc(Math.random() * 101);
  document.querySelector(".count").textContent = num;
}

generator.addEventListener("click", handleClick);
