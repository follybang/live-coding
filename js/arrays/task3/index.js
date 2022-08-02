// input: array, callback
// output: new array

// callback
// input: el, index(optional), array (optional)
// output: boolean

// 1. create new arr
// 2. iterate input arr
// 3. apply callback for every el
// 4. if true - push

const filterArrayElements = (arr, callback) => {
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      resArr.push(arr[index]);
    }
  }

  return resArr;
};

const testArray = [11, 0, -6, 1235, 100, 5, 3];
const testCallBack = (el, index, arr) => {
  if (index > 3 && el > 10) {
    return true;
  }
  return false;
};
console.log(filterArrayElements(testArray, testCallBack));

// function multiply(...args) {
//   return args.reduce((acc, el) => acc * el);
// }

// console.log(multiply(11, 7, 6));
