const checkbox = document.querySelector(".task-status");

const getChange = () => {
  console.log(checkbox.checked);
  console.log(checkbox.value);
};

checkbox.addEventListener("change", getChange);
