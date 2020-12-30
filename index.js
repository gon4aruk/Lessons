export const manageСlasses = () => {
  if (document.querySelector(".one")) {
    const one = document.querySelector(".one");
    one.setAttribute("class", "one selected");
  }

  if (document.querySelector(".two")) {
    const two = document.querySelector(".two");
    two.setAttribute("class", "two");
  }

  if (document.querySelector(".three")) {
    const three = document.querySelector(".three");
    three.setAttribute("class", "three");
  }

  if (document.querySelector(".some-class")) {
    const four = document.querySelector(".some-class");
    four.setAttribute("class", "four some-class another-class");
  }
};

