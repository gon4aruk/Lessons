const counterElem = document.querySelector(".counter");
const counterValueElem = document.querySelector(".counter__value");

const onCounterChange = (event) => {
  const isButton = event.target.classList.contains("counter__button");

  if (!isButton) {
    return;
  }

  const oldValue = Number(counterValueElem.textContent);

  const { action: dataAction } = event.target.dataset;

  counterValueElem.textContent =
    dataAction === "increase" ? oldValue + 1 : oldValue - 1;

  const newValue = counterValueElem.textContent;

  localStorage.setItem("counterValue", newValue);
};

counterElem.addEventListener("click", onCounterChange);

const onStorageChange = (event) => {
  counterValueElem.textContent = event.newValue;
};

window.addEventListener("storage", onStorageChange);

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem("counterValue");
};

document.addEventListener("DOMContentLoaded", onDocumentLoaded);
