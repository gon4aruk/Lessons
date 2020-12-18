const transactionsList = ["  1.9 ", "16.4", 17, " 1 dollar ", "fdd", '23', 4];

const cleanTransactionsList = (transactions) => {
  const sortList = transactions
    .map((el) => Number(el))
    .filter((el) => !Number.isNaN(el))
    .map((el) => `$${el.toFixed(2)}`);
  return sortList;
};

const result = cleanTransactionsList(transactionsList);
console.log(result);
