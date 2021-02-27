import { fetchUserData, fetchUserRepos } from "./src/gateways.js";
import { renderUserData } from "./src/renderUser.js";
import { renderRepoList } from "./src/renderReposList.js";
import { hideSpinner, showSpinner } from "./src/spinner.js";

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: "",
};

renderUserData(defaultUser);

const showUserButtonElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onClickButton = () => {
  const userName = userNameInputElem.value;
  showSpinner();
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((repos_url) => fetchUserRepos(repos_url))
    .then((reposList) => renderRepoList(reposList))
    .catch((error) => {
      alert(error.message);
    })
    .finally(() => {
      hideSpinner();
    });
};

showUserButtonElem.addEventListener("click", onClickButton);
