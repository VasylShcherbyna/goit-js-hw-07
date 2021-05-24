let controlFont = document.getElementById('font-size-control');

let controlText = document.querySelector('#text');

controlFont.oninput = () => {
  controlText.style.fontSize = controlFont.value + 'px';
};
