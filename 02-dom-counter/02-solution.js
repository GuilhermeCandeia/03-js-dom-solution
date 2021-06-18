const decrementButton = document.getElementById("counter-decrement");
const incrementButton = document.getElementById("counter-increment");
const counter = document.getElementById("counter-value");

decrementButton.onclick = () => {
  const counterValue = Number(counter.innerHTML);
  if (counterValue <= 0) return;
  counter.innerHTML = Number(counter.textContent) - 1;
};

incrementButton.onclick = () => {
  const counterValue = Number(counter.innerHTML);
  if (counterValue >= 10) return;
  counter.innerHTML = counterValue + 1;
};
