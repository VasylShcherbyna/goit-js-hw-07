const categories = document.querySelector('#categories');
const len = document.querySelector('ul').children.length;
console.log(`В списке ${len} категории.`);

const item = document.querySelectorAll('.item');



console.log('Категория:', item[0].firstElementChild.textContent);
const list1 = document.querySelectorAll('ul')[1].getElementsByTagName('li');
console.log('Количество элементов:', list1.length);

console.log('Категория:', item[1].firstElementChild.textContent);
const list2 = document.querySelectorAll('ul')[2].getElementsByTagName('li');
console.log('Количество элементов:', list2.length);

console.log('Категория:', item[2].firstElementChild.textContent);
const list3 = document.querySelectorAll('ul')[3].getElementsByTagName('li');
console.log('Количество элементов:', list3.length);

 




