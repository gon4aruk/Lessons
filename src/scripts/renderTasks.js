import { getItem } from "./storage.js";

const listElem = document.querySelector(".list");

const createCheckbox = (done, id) => {
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.classList.add("list__item-checkbox");
  checkboxElem.checked = done;
  checkboxElem.dataset.id = id;

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list__item");
  const checkboxElem = createCheckbox(done, id);
  if (done) {
    listItemElem.classList.add("list__item_done");
  }
  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem("tasksList") || [];

  listElem.innerHTML = "";

  const tasksElems = tasksList
    .sort(
      (el1, el2) =>
        el1.done - el2.done ||
        new Date(el2.timeOfChange) - new Date(el1.timeOfChange)
    )
    .map(createListItem);

  listElem.append(...tasksElems);
};
