export const squaredNumbers = () => {
  const numbers = document.querySelectorAll(".number");
  for (let i = 0; i < numbers.length; i += 1) {
    const numberDataValue = numbers[i].dataset.number;
    numbers[i].dataset.squaredNumber = numberDataValue * numberDataValue;
  }
};

squaredNumbers();
