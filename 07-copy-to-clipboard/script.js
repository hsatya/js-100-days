const btn = document.querySelector(".btn");

function copyToClipboard() {
  const text = document.querySelector("input");
  text.select();
  window.navigator.clipboard.writeText(text.value);
}

btn.addEventListener("click", copyToClipboard);
