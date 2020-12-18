import getSum, {
  getSquaredArray,
  getOddNumbers,
} from "/GromCode/JS/lessons/calculator.js";

it("should get square numbers from array", () => {
  const result = getSquaredArray([1, 2, 3]);

  expect(result).toEqual([1, 4, 9]);
});

it("should keep odd numbers only", () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});

it("should get sum of numbers", () => {
  const result = getSum(6, 2);

  expect(result).toEqual(8);
});
