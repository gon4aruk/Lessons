import { initToDoListHandlers } from "./initHandlers.js";
import { renderTasks } from "./renderTasks.js";

const onDocumentLoaded = () => {
  renderTasks();
  initToDoListHandlers();
};

document.addEventListener("DOMContentLoaded", onDocumentLoaded);

const onStorageChange = (event) => {
  if (event.key !== "tasksList") {
    return;
  }

  renderTasks();
};

window.addEventListener("storage", onStorageChange);
