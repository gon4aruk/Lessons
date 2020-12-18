import { getMinSquaredNumber } from "/GromCode/JS/lessons/getMinSquaredNumber.js";

it('should get "null" if passed an emply array', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('should get "null" if passed string', () => {
  const result = getMinSquaredNumber("str");

  expect(result).toEqual(null);
});

it('should get square of min number modulo from array', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});