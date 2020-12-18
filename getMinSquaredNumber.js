export const getMinSquaredNumber = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }
  const minNumber = Math.min(...numbers.map((num) => Math.abs(num)));
  return minNumber * minNumber;
};