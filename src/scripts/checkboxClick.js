import { getItem, setItem } from "./storage.js";
import { renderTasks } from "./renderTasks.js";

export const onCheckboxClick = (event) => {
  const isCheckbox = event.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return;
  }

  const tasksList = getItem("tasksList");

  const newTasksList = tasksList.map((task) => {
    if (task.id === event.target.dataset.id) {
      const done = event.target.checked;
      return {
        ...task,
        done,
        timeOfChange: new Date(),
      };
    }

    return task;
  });

  setItem("tasksList", newTasksList);
  renderTasks();
};
