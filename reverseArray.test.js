import { reverseArray } from "/GromCode/JS/lessons/reverseArray.js";

const someArray = [2, 4, 5, 7];

it('slould get "null" if passed not an array', () => {
  const result = reverseArray(2, 4, 5);

  expect(result).toEqual(null);
});

it("slould get reversed array", () => {
  const result = reverseArray(someArray);

  expect(result).toEqual([7, 5, 4, 2]);
});

it("primary arrray shouldn't change", () => {
  const result = reverseArray(someArray);
  const primaryArray = [...someArray];

  expect(result).toEqual([7, 5, 4, 2]);
  expect(primaryArray).toEqual([2, 4, 5, 7]);
});
