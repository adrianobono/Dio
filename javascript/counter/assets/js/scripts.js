let count = 0;
const CURRENT_NUMBER = document.getElementById("currentNumber");
const BTN1 = document.getElementById("btnsub");
const BTN2 = document.getElementById("btnadd");

BTN1.addEventListener("click", decrement);
BTN2.addEventListener("click", increment);

function increment() {
  count++;
  CURRENT_NUMBER.innerHTML = count;
  count >= 0 ? (CURRENT_NUMBER.style.color = "black") : "";
}

function decrement() {
  count--;
  CURRENT_NUMBER.innerHTML = count;
  count < 0 ? (CURRENT_NUMBER.style.color = "red") : "";
}
