// const withdraw = (clients, balances, client, amount) => {
//   balances.find((item, index) => clients.indexOf(client) === index);
//   balances[clients.indexOf(client)];
//   if (
//     balances.find((item, index) => clients.indexOf(client) === index) < amount
//   ) {
//     return -1;
//   }

//   return (
//     balances.find((item, index) => clients.indexOf(client) === index) - amount
//   );
// };

const withdraw = (clients, balances, client, amount) => {
  return balances[clients.indexOf(client)] >= amount
    ? (balances[clients.indexOf(client)] -= amount)
    : -1;
};

const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;

  return balances[clientIndex];
};

const withdraw = (clients, balances, client, amount) => {
  const curentClient = clients.indexOf(client);
  if (amount > balances[curentClient]) {
    return -1;
  }

  return (balances[curentClient] -= amount);
};

const withdraw = function (clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);
  if (balances[clientIndex] < amount) {
    return -1;
  }
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] >= amount
    ? balances[clients.indexOf(client)] - amount
    : -1;

const getRandomNumbers = (length, from, to) => {
  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);
  if (toCeil - fromCeil < 1) {
    return null;
  }

  return new Array(length).fill(
    Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil),
  );
};
