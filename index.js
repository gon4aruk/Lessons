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

  fetch(baseUrl, {
    method: "POST",
    body: new FormData(formElem),
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
