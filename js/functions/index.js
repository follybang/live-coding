function getSenseOfLife() {
  return 42;
}

console.log(getSenseOfLife());

function getSquared(num) {
  return num * num;
}

console.log(getSquared(10));

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

console.log(sum(10, 10));

function printMessage(age) {
  return `I am ${age} years old`;
}

console.log(printMessage(34));
console.log(printMessage('34'));

function sumFunc(from, to) {
  let result = 0;

  for (let index = from; index <= to; index += 1) {
    result += index;
  }

  return result;
}

console.log(sumFunc(5, 7));
console.log(sumFunc(-5, 5));

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sumFunc(firstFrom, firstTo) > sumFunc(secondFrom, secondTo);
}

console.log(compareSums(1, 100, 5, 10));
console.log(compareSums(1, 4, 10, 15));

const mult = (firstNum, secondNum) => firstNum * secondNum;

console.log(mult(10, 10));

const getMagicNumber = () => 17;

console.log(getMagicNumber());
console.log(getMagicNumber);
console.log(getMagicNumber(1));
