import { onButtonClick } from "./addNewTask.js";
import { onCheckboxClick } from "./checkboxClick.js";

export const initToDoListHandlers = () => {
  const buttonElem = document.querySelector(".btn");
  buttonElem.addEventListener("click", onButtonClick);

  const listElem = document.querySelector(".list");
  listElem.addEventListener("click", onCheckboxClick);
};
