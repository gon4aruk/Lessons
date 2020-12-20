import { withdraw } from "/GromCode/JS/lessons/withdraw.js";

it("should get account balance", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

  expect(result).toEqual(37);
});

it("should get '-1' if amount bigger then balance", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);

  expect(result).toEqual(-1);
});

it("if amount bigger then balance, the money shouldn't be withdrawn", () => {
  const users = ["Ann", "John", "User"];
  const balances = [1400, 87, -6];
  const result = withdraw(users, balances, "User", 10);

  expect(result).toEqual(-1);
  expect(balances).toEqual([1400, 87, -6]);
});
