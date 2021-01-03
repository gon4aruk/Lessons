const buttonElems = document.querySelectorAll(".btn");

const handleClick = (event) => {
    console.log(event.target.textContent);
};

for (let i = 0; i < buttonElems.length; i += 1) {
  buttonElems[i].addEventListener("click", handleClick);
}
