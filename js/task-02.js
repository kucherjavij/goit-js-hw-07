const ingrEL = document.querySelector('#ingredients')
// console.log(ingrEL)

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newItems = ingredients.map((element) => {
  const item = document.createElement('li')
  item.textContent = element
  return item
})
ingrEL.append(...newItems)