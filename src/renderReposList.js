const reposListElem = document.querySelector(".repo-list");

const createRepoListItem = (name) => {
  const listItem = document.createElement("li");
  listItem.classList.add("repo-list__item");
  listItem.textContent = name;
  return listItem;
};

export const renderRepoList = (reposList) => {
  const listElemsArray = reposList.map(({ name }) => createRepoListItem(name));
  reposListElem.innerHTML = '';
  reposListElem.append(...listElemsArray);
};
