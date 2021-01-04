const arenaElem = document.querySelector(".arena");

const getNumbersArray = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }

  return result;
};

const getLineSeats = () => {
  return getNumbersArray(1, 10)
    .map(
      (numberOfSeat) =>
        `<div class="sector__seat" data-seat-number="${numberOfSeat}"></div>`
    )
    .join("");
};

const getSectorLines = () => {
  return getNumbersArray(1, 10)
    .map(
      (numberOfLine) =>
        `<div class="sector__line" data-line-number="${numberOfLine}">${getLineSeats()}</div>`
    )
    .join("");
};

const renderSectors = () => {
  const sectorsString = getNumbersArray(1, 3)
    .map(
      (numberOfSector) =>
        `<div class="sector" data-sector-number="${numberOfSector}">${getSectorLines()}</div>`
    )
    .join("");
  arenaElem.innerHTML = sectorsString;
};

renderSectors();

const boardElem = document.querySelector(".board__selected-seat");

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains("sector__seat");

  if (!isSeat) {
    return;
  }

  const selectedSeat = event.target.dataset.seatNumber;
  const selectedLine = event.target.closest(".sector__line").dataset.lineNumber;
  const selectedSector = event.target.closest(".sector").dataset.sectorNumber;

  boardElem.textContent = `S ${selectedSector} - L ${selectedLine} - S ${selectedSeat}`;
};

arenaElem.addEventListener("click", onSeatSelect);
