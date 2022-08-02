// 1. create new obj
// 2. iterate keylist
// 3. put key/value to the obj

// function buildObject(keyList, valuesList) {
//   const obj = {};
//   for (let index = 0; index < keyList.length; index += 1) {
//     obj[keyList[index]] = valuesList[index];
//   }
//   return obj;
// }

function buildObject(keyList, valuesList) {
  return keyList.reduce(
    (obj, key, index) => ({
      ...obj,
      [key]: valuesList[index],
    }),

    {},
  );
}

const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values);
console.log(result);

const obj = {
  name: 'Tom',
  id: 18,
};
