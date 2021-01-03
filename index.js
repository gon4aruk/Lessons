const inputElem = document.querySelector(".text-input");

const getInputText = (event) => {
  console.log(event.target.value);
};

inputElem.addEventListener("change", getInputText);
