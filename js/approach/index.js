// input: number
// output: undefiend

// 1. iterate from 2 to num
// 2. check if N is prime
// 2.1 iterate from 2 to N
// 2.2 if N / index === 0 then NOT prime
// 3 if prime - print it

// function getPrimes(num) {
//   for (let number = 2; number <= num; number += 1) {
//     let isPrime = true;
//     for (let index = 2; index < number; index += 1) {
//       if (number % index === 0) {
//         isPrime = false;
//       }
//     }

//     if (isPrime) {
//       console.log(number);
//     }
//   }
// }

// getPrimes(7);

function primesChecker(number) {
  let isPrime = true;
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (primesChecker(number)) {
      console.log(number);
    }
  }
}

getPrimes(7);
getPrimes(11);
getPrimes(0);
getPrimes(-10);
