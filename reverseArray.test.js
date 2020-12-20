import { reverseArray } from "/GromCode/JS/lessons/reverseArray.js";

it('slould get "null" if passed not an array', () => {
  const result = reverseArray(2, 4, 5);

  expect(result).toEqual(null);
});

it("slould get reversed array", () => {
  const result = reverseArray([2, 4, 5, 7]);

  expect(result).toEqual([7, 5, 4, 2]);
});

it("primary array shouldn't be changed", () => {
  const someArray = [2, 4, 5, 7];
  const result = reverseArray(someArray);

  expect(result).toEqual([7, 5, 4, 2]);
  expect(someArray).toEqual([2, 4, 5, 7]);
});
