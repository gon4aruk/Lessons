export function calculator(a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
}

/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */

export const multiplier = (a, b) => {
  const obj = { operation: "*" }; 
  return calculator.bind(obj, a, b);
};

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */

export const summator = (a, b) => {
  const obj = { operation: "+" }; 
  return calculator.bind(obj, a, b);
};

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */

export const twice = (a) => {
  const obj = { operation: "*" }; 
  return calculator.bind(obj, a, 2);
};