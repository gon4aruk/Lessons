export const setButton = buttonText => {
  const body = document.querySelector('body');
  body.innerHTML = `<button>${buttonText}</button>`;
}

