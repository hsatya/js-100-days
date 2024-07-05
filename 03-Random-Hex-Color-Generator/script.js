const generator = document.querySelector(".btn");

function handleClick() {
  let color = "#";
  let haxNums = "0123456789abcdef";

  for (let i = 0; i < 6; ++i) {
    const pos = Math.trunc(Math.random() * haxNums.length);
    color += haxNums.charAt(pos);
  }

  document.querySelector(".count").textContent = color;
  document.body.style.backgroundColor = color;
}

generator.addEventListener("click", handleClick);
