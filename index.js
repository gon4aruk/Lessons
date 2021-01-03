const checkbox = document.querySelector(".task-status");

const getStatus = (event) => {
  console.log(event.target.checked);
};

checkbox.addEventListener("change", getStatus);
