const counter = document.querySelector('.counter');

const buttons = document.querySelectorAll('.buttons');

let count = Number(counter.textContent);

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const id = e.target.id;
    switch (id) {
      case 'btnAdd':
        counter.textContent = ++count;
        break;
      case 'btnSub':
        counter.textContent = --count;
        break;
      case 'btnRes':
        counter.textContent = 0;
        break;

      default:
        break;
    }
  });
});
