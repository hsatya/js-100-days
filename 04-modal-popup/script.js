const btn = document.querySelector("#pop");

function handleClick() {
  const modal = document.querySelector(".modal");
  modal.style.display = "block";

  const clear = document.querySelector(".clear");
  clear.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

btn.addEventListener("click", handleClick);
