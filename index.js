const buttonElem = document.querySelector(".single-use-btn");

const getStatus = () => {
  console.log('clicked');
  buttonElem.removeEventListener("click", getStatus);
};

buttonElem.addEventListener("click", getStatus);
