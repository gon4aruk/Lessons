const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");

const renderUserData = (userData) => {
  const { avatar_url, name, location } =  userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location
    ? `from ${location}`
    : '';
}

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json());
};

const showUserButtonElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onClickButton = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => renderUserData(userData));
};

showUserButtonElem.addEventListener("click", onClickButton);
