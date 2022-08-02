function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

console.log(addPropertyV1(testObj, 'id', 18));

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

console.log(addPropertyV2(testObj, 'id', 18));
console.log(testObj);

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

const transaction = {
  amount: 170,
};

const res1 = addPropertyV4(transaction, 'currency', 'USD');
const res2 = addPropertyV4(res1, 'amount', 300);
console.log('result1', res1);
console.log('result2', res2);
console.log('obj after', transaction);
