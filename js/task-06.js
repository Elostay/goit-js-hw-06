const input = document.getElementById("validation-input");
const MAX_LENGTH = document.querySelector('input[data-length="6"]').dataset
  .length;

input.addEventListener("blur", onInputClick);

function onInputClick(event) {
  if (event.currentTarget.value.length === Number(MAX_LENGTH)) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
}
