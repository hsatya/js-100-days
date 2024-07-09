const input = document.querySelector("#input");
const count = document.querySelector(".count");
let str = "";

input.addEventListener("input", (e) => {
  str = e.target.value;
  count.textContent = str.length;
});
