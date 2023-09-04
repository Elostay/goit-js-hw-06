const input = document.querySelector('input[type="number"]');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');

create.addEventListener('click', function () {
  var amount = parseInt(input.value);
  createBoxes(amount);
});

destroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount < 0 || amount > 100) {
    alert('Будь-ласка введіть значення від 1 до 100');
  }
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.borderRadius = `50%`;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    size += 10;
    boxes.append(div);
  }
}

function inputCleaner(inp) {
  inp.value = '';
}

function destroyBoxes() {
  boxes.innerHTML = '';
  inputCleaner(input);
}
