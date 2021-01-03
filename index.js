const inputElem = document.querySelector(".search__input");
const buttonElem = document.querySelector(".search__btn");

const search = () => {
  console.log(inputElem.value);
};

buttonElem.addEventListener("click", search);
