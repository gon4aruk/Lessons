const baseUrl = "https://60322069081a010017547728.mockapi.io/api/v1/users";

const formElem = document.querySelector(".login-form");
const emailInputElem = document.querySelector('.form-input[type="email"]');
const userNameInputElem = document.querySelector('.form-input[type="text"]');
const passwordInputElem = document.querySelector(
  '.form-input[type="password"]'
);
const submitBtnElem = document.querySelector(".submit-button");
const errorTextElem = document.querySelector(".error-text");

const checkValidation = () => {
  if (formElem.reportValidity()) {
    submitBtnElem.removeAttribute("disabled");
  }

  errorTextElem.textContent = "";
};

const onSubmitForm = (event) => {
  event.preventDefault();

  const email = emailInputElem.value;
  const userName = userNameInputElem.value;
  const password = passwordInputElem.value;

  const userData = {
    email,
    userName,
    password,
  };

  const stringUserData = JSON.stringify(userData);

  const response = fetch(baseUrl, {
    method: "POST",
    body: stringUserData,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  response
    .then((result) => result.json())
    .then((data) => {
      alert(JSON.stringify(data));
      errorTextElem.textContent = "";
    })
    .catch(() => {
      errorTextElem.textContent = "Failed to create user";
    });
};

formElem.addEventListener("input", checkValidation);
submitBtnElem.addEventListener("click", onSubmitForm);
