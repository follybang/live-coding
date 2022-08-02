const numbersList = [5, 0, 8, 10, -4, 50, 220];
console.log(numbersList);

// const mapRes = numbersList.map(el => el * el);

// console.log(mapRes);

// const mapRes = numbersList.map((el, index) => {
//   if (index > 2) {
//     return el * el;
//   }
//   return el;
// });

const mapRes = numbersList.map((el, index) => (index > 2 ? el * el : el));

// task 3

// input: callback
// output: none

numbersList.forEach(el => {
  if (el > 0) {
    console.log(el);
  }
});

// task 4

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback
// output: number

// input: acc, element, index, array
// output: acc

transactions.reduce((sum, el) => {
  console.log('sum', sum);
  console.log('el', el);

  if (el > 100) {
    return sum + el;
  }
  return sum;
}, 0);

const reduceSum = transactions.reduce((sum, el) => (el > 100 ? sum + el : sum), 0);
console.log(reduceSum);
