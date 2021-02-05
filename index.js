export const asyncCalculator = (num) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 500);
  })
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        })
    )
    .then(
      (value) =>
        new Promise((resolve) => {
          const result = value * 2;
          console.log(`Doubled value: ${result}`);
          resolve(result);
        })
    );

