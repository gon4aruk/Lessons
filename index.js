const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderListItem = (itemList) => {
  const itemListElem = document.querySelector(".list");

  const itemsListElements = itemList.map(({ text, done }) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list__item");
    const checkbox = document.createElement("input");
    checkbox.classList.add("list__item-checkbox");
    checkbox.setAttribute("type", "checkbox");
    if (done) {
      listItem.classList.add("list__item_done");
    }
    checkbox.checked = done;
    listItem.append(checkbox, text)
    return listItem;
  });

  return itemListElem.append(...itemsListElements);
};

renderListItem(tasks);
