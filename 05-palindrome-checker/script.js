const btn = document.querySelector(".btn");

function isPalindrome(str) {
  const rev = str.split("").reverse().join("");
  if (str === rev) return true;
  return false;
}

function checkPalindrome() {
  const text = document.querySelector("input").value.toUpperCase();
  const result = document.querySelector(".result");
  if (text.length === 0) {
    alert("Please enter a word!");
    return;
  }

  const isPal = isPalindrome(text);

  if (isPal) {
    result.textContent = `${text} is a palindrome`;
  } else {
    result.textContent = `${text} is not a palindrome`;
  }
}

btn.addEventListener("click", checkPalindrome);
