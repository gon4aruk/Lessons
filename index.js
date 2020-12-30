const finishList = () => {
  const itemsList = document.querySelector(".list");
  const itemsListArray = Array.from(document.querySelectorAll("li"));
  const itemsText = itemsListArray.map((elem) => elem.textContent);
  if (itemsListArray.length < 8) {
    for (let i = 1; i <= 8; i += 1) {
      if (!itemsText.includes(String(i))) {
        const listItem = document.createElement("li");
        listItem.textContent = i;
        itemsList.append(listItem);
      }
    }
  }

  const itemsListArrayNew = Array.from(document.querySelectorAll("li"));
  const itemsListArraySorted = itemsListArrayNew.sort(
    (elem1, elem2) => elem1.textContent - elem2.textContent
  );
  itemsList.innerHTML = "";
  itemsList.append(...itemsListArraySorted);
};
