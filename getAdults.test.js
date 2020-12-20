import { getAdults } from "/GromCode/JS/lessons/getAdults.js";

it("slould get object that contains only those who have reached 18 years old", () => {
  const result1 = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  const result2 = getAdults({ Ann: 56, Andrey: 7 });

  expect(result1).toEqual({ "John Doe": 19, Bob: 18 });
  expect(result2).toEqual({ Ann: 56 });
});

it("should get emply object if passed emply object", () => {
  const result = getAdults({});

  expect(result).toEqual({});
});

it("primary object shouldn't be changed", () => {
  const users = { "John Doe": 19, Tom: 17, Bob: 18 };
  const result = getAdults(users);

  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
  expect(users).toEqual({ "John Doe": 19, Tom: 17, Bob: 18 });
});
