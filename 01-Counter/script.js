const buttons = document.querySelectorAll(".btn");

function handleClick(val) {
  const counter = document.querySelector(".count");
  let count = Number(counter.textContent);

  switch (val) {
    case "inr":
      counter.textContent = ++count;
      counter.style.color = "lightgreen";
      return;
    case "dec":
      counter.textContent = --count;
      counter.style.color = "red";
      return;
    case "res":
      counter.textContent = 0;
      counter.style.color = "aliceblue";
      return;
    default:
      return;
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => handleClick(btn.value));
});
