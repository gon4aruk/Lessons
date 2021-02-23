const baseUrl = "https://60322069081a010017547728.mockapi.io/api/v1/users";

const formElem = document.querySelector(".login-form");
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

  const formData = new FormData(formElem);
  const email = formData.get("email");
  const userName = formData.get("name");
  const password = formData.get("password");

  const userData = {
    email,
    userName,
    password,
  };

  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(JSON.stringify(data));
      formElem.reset();
    })
    .catch(() => {
      errorTextElem.textContent = "Failed to create user";
    });
};

formElem.addEventListener("input", checkValidation);
submitBtnElem.addEventListener("click", onSubmitForm);
