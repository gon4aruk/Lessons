const listElem = document.querySelector(".list");

const tasks = [
  {
    text: "Buy milk",
    done: false,
    id: Math.round(Math.random() * 100),
    timeOfClick: new Date(),
  },
  {
    text: "Pick up Tom from airport",
    done: false,
    id: Math.round(Math.random() * 100),
    timeOfClick: new Date(),
  },
  {
    text: "Visit party",
    done: false,
    id: Math.round(Math.random() * 100),
    timeOfClick: new Date(),
  },
  {
    text: "Visit doctor",
    done: true,
    id: Math.round(Math.random() * 100),
    timeOfClick: new Date(),
  },
  {
    text: "Buy meat",
    done: true,
    id: Math.round(Math.random() * 100),
    timeOfClick: new Date(),
  },
];

// render tasks

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((el1, el2) => el2.timeOfClick - el1.timeOfClick)
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// on checkbox click

const onCheckboxClick = (event) => {
  const isCheckbox = event.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return;
  }

  const listItemSelected = event.target.closest(".list__item");
  const checkboxId = event.target.dataset.id;

  if (event.target.value) {
    listItemSelected.classList.toggle("list__item_done");
    const taskElem = tasks.find(({ id }) => id === Number(checkboxId));
    taskElem.timeOfClick = new Date();
    if (taskElem.done) {
      taskElem.done = false;
    } else {
      taskElem.done = true;
    }
  }

  listElem.textContent = "";
  renderTasks(tasks);
};

listElem.addEventListener("click", onCheckboxClick);

// add new task

const inputElem = document.querySelector(".task-input");
const buttonElem = document.querySelector(".btn");

const onButtonClick = () => {
  if (inputElem.value === "") {
    return;
  }
  const newTask = {
    text: inputElem.value,
    done: false,
    id: Math.round(Math.random() * 100),
    timeOfClick: new Date(),
  };

  inputElem.value = "";
  tasks.unshift(newTask);
  listElem.textContent = "";
  renderTasks(tasks);
};

buttonElem.addEventListener("click", onButtonClick);
