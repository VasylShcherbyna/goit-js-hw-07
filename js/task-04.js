const counterValue = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const counter = {
  value: 0,
  increment() {
    return counter.value++;
  },

  decrement() {
    return counter.value--;
  },
};

decrementButton.addEventListener('click', function () {
  counter.decrement();
  counterValue.textContent = counter.value;
});

incrementButton.addEventListener('click', function () {
  counter.increment();
  counterValue.textContent = counter.value;
});
