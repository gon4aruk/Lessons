import { getDiff } from "/GromCode/JS/lessons/index.js";

it("should get difference of dates №1", () => {
  const result = getDiff(
    new Date(2021, 0, 6, 12, 50, 23),
    new Date(2021, 0, 12, 16, 55, 30)
  );

  expect(result).toEqual("6d 4h 5m 7s");
});

it("should get difference of dates №2", () => {
  const result = getDiff(
    new Date(2019, 0, 6, 7, 42, 15),
    new Date(2021, 0, 12, 16, 55, 30)
  );

  expect(result).toEqual("737d 9h 13m 15s");
});

it("should get difference of dates №3", () => {
  const result = getDiff(
    new Date(2006, 5, 11, 7, 36, 15),
    new Date(2021, 2, 12, 12, 47, 25)
  );

  expect(result).toEqual("5388d 6h 11m 10s");
});

it("should get difference of dates №4", () => {
  const result = getDiff(
    new Date(2021, 0, 12, 21, 30),
    new Date(2021, 0, 6, 15, 15)
  );

  expect(result).toEqual("6d 6h 15m 0s");
});

it("should get difference of dates №5", () => {
  const result = getDiff(
    new Date(2018, 0, 7, 11, 19, 56),
    new Date(2014, 1, 17, 14, 15, 16)
  );

  expect(result).toEqual("1419d 21h 4m 40s");
});
