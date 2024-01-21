let count = 0;

function increament() {
  count++;
  updateDisplay();
}

function updateDisplay() {
  document.querySelector('.counter').innerText = `Counter: ${count}`;
}