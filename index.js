const listElem = document.querySelector(".list");

const tasks = [
  {
    text: "Buy milk",
    done: false,
    id: Math.round(Math.random() * 1000),
    timeOfChange: new Date(),
  },
  {
    text: "Pick up Tom from airport",
    done: false,
    id: Math.round(Math.random() * 1000),
    timeOfChange: new Date(),
  },
  {
    text: "Visit party",
    done: false,
    id: Math.round(Math.random() * 1000),
    timeOfChange: new Date(),
  },
  {
    text: "Visit doctor",
    done: true,
    id: Math.round(Math.random() * 1000),
    timeOfChange: new Date(),
  },
  {
    text: "Buy meat",
    done: true,
    id: Math.round(Math.random() * 1000),
    timeOfChange: new Date(),
  },
];

// render tasks

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((el1, el2) => el2.timeOfChange - el1.timeOfChange)
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

  const selectedListItem = event.target.closest(".list__item");
  selectedListItem.classList.toggle("list__item_done");

  const checkboxId = event.target.dataset.id;
  const taskElemInArray = tasks.find(({ id }) => id === Number(checkboxId));
  taskElemInArray.timeOfChange = new Date();

  if (taskElemInArray.done) {
    taskElemInArray.done = false;
  } else {
    taskElemInArray.done = true;
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
    id: Math.round(Math.random() * 1000),
    timeOfChange: new Date(),
  };
  tasks.unshift(newTask);

  inputElem.value = "";

  listElem.textContent = "";
  renderTasks(tasks);
};

buttonElem.addEventListener("click", onButtonClick);
