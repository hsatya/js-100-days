const btn = document.querySelector(".btn");

function countVowel() {
  const text = document.querySelector("input").value.toLowerCase();
  const result = document.querySelector(".result");

  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  if (text.length === 0) {
    alert("Please enter a word!");
    return;
  }

  for (let i = 0; i < text.length; ++i) {
    vowels.forEach((v) => {
      v === text.charAt(i) ? count++ : count;
    });
  }

  console.log(count);

  result.textContent = `${text.toUpperCase()} has ${count} vowels`;
}

btn.addEventListener("click", countVowel);
