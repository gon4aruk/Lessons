const buttonsList = document.querySelectorAll(".pagination__page");

const getDataSet = (event) => {
  console.log(event.target.dataset.pageNumber);
};

for (let i = 0; i < buttonsList.length; i +=1) {
    buttonsList[i].addEventListener("click", getDataSet);
}

