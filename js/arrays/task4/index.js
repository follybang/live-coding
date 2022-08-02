const mapArrayElements = (arr, callback) => {
  const result = [];
  for (let index = 0; index < arr.length; index += 1) {
    result.push(callback(arr[index], index, arr));
  }
  return result;
};

const callbackFuntion = (arrElement, index, entireArr) => {
  return (arrElement += `Index is ${index}`);
};

const testArray = ['first', 'second', 'third'];
console.log(mapArrayElements(testArray, callbackFuntion));
