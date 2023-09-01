const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = "56px";

input.addEventListener("input", changeRange);

function changeRange(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
