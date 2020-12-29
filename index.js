const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderListItem = (itemList) => {
  const itemListElem = document.querySelector(".list");

  const itemsListElements = itemList.map(({ text }) => {
    const listItem = document.createElement("li");
    listItem.classList.add(".list__item");
    listItem.append(text);
    return listItem;
  });

  return itemListElem.append(...itemsListElements);
};

renderListItem(tasks);
