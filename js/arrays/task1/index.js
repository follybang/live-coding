const numbersList1 = [1, 2, 3, 4, 5];
const result1 = numbersList1.pop();

console.log(result1);
console.log(numbersList1);

// ===================

const numbersList2 = [1, 2, 3, 4, 5];
const pushRes = numbersList2.push(777);

console.log(pushRes);
console.log(numbersList2);

// ===================

const numbersList3 = [1, 2, 3, 4, 5];
const shiftRes = numbersList3.shift();

console.log(shiftRes);
console.log(numbersList3);

// ===================

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
const filterRes = anotherNumbersList.filter(function filterCallback(element) {
  return element > 0;
});
console.log(filterRes);

console.log(anotherNumbersList.filter(el => el > 0));

// ====================

function sum(from, to, resolver) {
  let sumRes = 0;
  for (let index = from; index <= to; index += 1) {
    sumRes += index;
  }

  resolver(sumRes);
}

function func(number) {
  console.log(number);
}

function funcAlert(number) {
  alert(number);
}

sum(1, 10, func);
