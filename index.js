const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");

const logTarget = (text, color) => {
  const eventsListItem = document.querySelector(".events-list");

  eventsListItem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySpan = logTarget.bind(null, "SPAN", "grey");

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

divElem.addEventListener("click", logGreyDiv, true);
pElem.addEventListener("click", logGreyP, true);
spanElem.addEventListener("click", logGreySpan, true);

divElem.addEventListener("click", logGreenDiv);
pElem.addEventListener("click", logGreenP);
spanElem.addEventListener("click", logGreenSpan);

const attachHundleds = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  pElem.addEventListener("click", logGreyP, true);
  spanElem.addEventListener("click", logGreySpan, true);

  divElem.addEventListener("click", logGreenDiv);
  pElem.addEventListener("click", logGreenP);
  spanElem.addEventListener("click", logGreenSpan);
};

const attachButton = document.querySelector(".attach-handlers-btn");
attachButton.addEventListener("click", attachHundleds);

const removeHundleds = () => {
  divElem.removeEventListener("click", logGreyDiv, true);
  pElem.removeEventListener("click", logGreyP, true);
  spanElem.removeEventListener("click", logGreySpan, true);

  divElem.removeEventListener("click", logGreenDiv);
  pElem.removeEventListener("click", logGreenP);
  spanElem.removeEventListener("click", logGreenSpan);
};

const removebutton = document.querySelector(".remove-handlers-btn");
removebutton.addEventListener("click", removeHundleds);

const clearButton = () => {
  const eventsListItem = document.querySelector(".events-list");

  eventsListItem.innerHTML = "";
};

const clear = document.querySelector(".clear-btn");
clear.addEventListener("click", clearButton);
