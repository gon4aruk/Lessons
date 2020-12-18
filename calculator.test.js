import { calc } from "/GromCode/JS/lessons/calculator.js";

it('should get sum of numbers', () => {
  const result = calc("4 + 3");

  expect(result).toEqual("4 + 3 = 7");
});

it('should get difference of numbers', () => {
  const result = calc("6 - 2");

  expect(result).toEqual("6 - 2 = 4");
});

it('should get quotient of numbers', () => {
  const result = calc("8 / 2");

  expect(result).toEqual("8 / 2 = 4");
});

it('should get product of numbers', () => {
  const result = calc("4 * 2");

  expect(result).toEqual("4 * 2 = 8");
});

it('should return "null" if passed not a string', () => {
  const result = calc(2 + 3);

  expect(result).toEqual(null);
});