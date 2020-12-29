export const createButton = (text) => {
  const body = document.querySelector('body');
  const button = document.createElement('button');
  button.textContent = text;
  body.append(button);
};

