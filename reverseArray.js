export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const newArr = [...arr];
  const result = newArr.reverse();
  return result;
};