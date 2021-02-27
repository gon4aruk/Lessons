import { fetchUserData, fetchUserRepos } from "./gateways.js";
import { renderUserData } from "./renderUser.js";
import { renderRepoList } from "./renderReposList.js";
import { hideSpinner, showSpinner } from "./spinner.js";

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

  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      showSpinner();
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
