export const finishForm = () => {
  const textInput = document.querySelector('input');
  textInput.setAttribute('type', 'password');
  
  const form = document.querySelector('form');
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'login');
  form.prepend(newInput);
}
