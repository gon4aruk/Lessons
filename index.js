const inputElem = document.querySelector(".text-input");

const getChange = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener("change", getChange);
