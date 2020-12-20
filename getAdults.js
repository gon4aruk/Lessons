export const getAdults = (obj) => {
  const filteredObj = {};

  Object.entries(obj)
    .filter((el) => el[1] >= 18)
    .forEach((el) => {
      const [key, value] = el;
      filteredObj[key] = value;
    });

  return filteredObj;
};
