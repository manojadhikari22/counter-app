let count = 0;

function increament() {
  count++;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('counter').innerText = `Counter: ${count}`;
}