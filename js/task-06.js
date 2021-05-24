const inputValue = document.getElementById('validation-input');

const totalLenght = inputValue.getAttribute('data-length');
const intTotallenght = parseInt(totalLenght, 10);

inputValue.oninput = () => {
  if (inputValue.value.length === intTotallenght) {
    inputValue.classList.remove('invalid');
    inputValue.classList.add('valid');
  }
  if (inputValue.value.length === 0) {
    inputValue.classList.remove('valid');
    inputValue.classList.remove('invalid');
  }
  if (
    inputValue.value.length !== intTotallenght &&
    inputValue.value.length !== 0
  ) {
    inputValue.classList.add('invalid');
  }
};
