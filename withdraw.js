export const withdraw = (clients, balances, client, amount) => {
  const userIndex = clients.indexOf(client);

  if (balances[userIndex] > amount) {
    balances[userIndex] -= amount;
    return balances[userIndex];
  }

  return -1;
};
