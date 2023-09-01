const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newList = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", newList);

console.log(newList);
