const counter = document.querySelector("#output");

function increment() {
  let c = Number(counter.innerHTML);
  c++;
  counter.innerHTML = c;
}

function decrement() {
  let c = Number(counter.innerHTML);
  c--;
  counter.innerHTML = c;
}
