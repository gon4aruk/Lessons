import { getItem, setItem } from "./storage.js";
import { renderTasks } from "./renderTasks.js";

const inputElem = document.querySelector(".task-input");

export const onButtonClick = () => {
  if (inputElem.value === "") {
    return;
  }
  const tasksList = getItem("tasksList") || [];

  const newTasksList = tasksList.concat({
    text: inputElem.value,
    done: false,
    id: Math.round(Math.random() * 1000).toString(),
    timeOfChange: new Date(),
  });

  inputElem.value = "";

  setItem("tasksList", newTasksList);
  renderTasks();
};
