const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value");
let counterValue = 0;
increment.addEventListener("click", onIncrementClick);
decrement.addEventListener("click", onDecrementClick);

function onIncrementClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
function onDecrementClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}
