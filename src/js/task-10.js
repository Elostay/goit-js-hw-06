//!                     НЕ ЗРОБЛЕНО

const input = document.querySelector('input[type="number"]');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');

// destroy.addEventListener('click');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let counter = 0;
function inputListener(event) {
  return Number(event.currentTarget.value);
}
console.log(counter);

function createBoxes(amount) {
  //   console.log(amount);
}
input.addEventListener('input', inputListener);
create.addEventListener('click', createBoxes(counter));
