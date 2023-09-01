const list = document.querySelector('#categories');

const items = [...list.children];
console.log('Number of categories:', items.length);

const category = items.forEach(item => {
  const category = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;
  console.log(
    `Category: ${category}
Elements: `,
    elements
  );
});
