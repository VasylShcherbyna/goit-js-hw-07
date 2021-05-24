const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const element = document.querySelector('#ingredients');
const gredient = gradients => {
  const li = document.createElement('li');
  li.textContent = gradients;
  return li;
};
const arr = ingredients.map(gredient);
element.append(...arr);
