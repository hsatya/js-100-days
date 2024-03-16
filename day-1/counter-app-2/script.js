const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
let presentValue = parseInt(result.textContent);

// const actions = {
//   inc: () => presentValue++,
//   subs: () => presentValue--,
//   reset: () => (presentValue = 0),
// };

function setColor() {
  if (presentValue > 0) {
    result.style.color = "yellow";
  } else if (presentValue < 0) {
    result.style.color = "orangered";
  } else {
    result.style.color = "white";
  }
}

function handleButtonClick(buttonId) {
  if (buttonId === "subs") {
    presentValue--;
  } else if (buttonId === "inc") {
    presentValue++;
  } else if (buttonId === "reset") {
    presentValue = 0;
  }

  result.innerHTML = presentValue;
  setColor();
}

// function handleButtonClick(buttonId) {
//   //   console.log(buttonId);
//   const val = actions[buttonId];
//   result.innerHTML = val;
// }

buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button.id));
});
