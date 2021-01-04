const emailInputElem = document.querySelector("#email");
const passwordInputElem = document.querySelector("#password");

const errorTextEmail = document.querySelector(".error-text_email");
const passwordErrorText = document.querySelector(".error-text_password");

const isRequared = (value) => (value ? undefined : "Requaried");

const isEmail = (value) =>
  value.includes("@") ? undefined : "Should be an email";

const validatorsByName = {
  email: [isRequared, isEmail],
  password: [isRequared],
};

const validate = (fieldName, value) => {
  const validators = validatorsByName[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(", ");
};

const onEmailChange = (event) => {
  const errorText = validate("email", event.target.value);
  errorTextEmail.textContent = errorText;
};

const inPasswordChange = (event) => {
  const errorText = validate("password", event.target.value);
  passwordErrorText.textContent = errorText;
};

emailInputElem.addEventListener("input", onEmailChange);
passwordInputElem.addEventListener("input", inPasswordChange);

const formElem = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElem));
  alert(JSON.stringify(formData));
};

formElem.addEventListener("submit", onFormSubmit);
