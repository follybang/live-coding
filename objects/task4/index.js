// algo
// 1. get array of key-value - entries
// 2. iterate array of entries - on every step create new obj
// 3. sort array & return it

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => {
//       return { id, ...customer };
//     })
//     .sort((a, b) => a.age - b.age);

// ANNA
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// ROMAN
// 1.use push instead of concat
// 2.use map instead of resuce
// 3.rename data
// const getCustomersList = customers =>
//   Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);

// ALEXANDR
// use (a,b) in sort method
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort(
//       (customerFirst, customerSecond) => customerFirst.age - customerSecond.age,
//     );

// ANASTASIA
// 1.don't use values
// 2.don't use index
// 3.bad naming
// const getCustomersList = obj => {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);

//   return values
//     .map((el, index) => ({ ...el, id: keys[index] }))
//     .sort((a, b) => a.age - b.age);
// };

// OLEKSII
// 1.don't use values
// 2.don't use index
// 3.bad naming
// 4.remove redunt variables
// const getCustomersList = obj => {
//   const customersIdList = Object.keys(obj);

//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({
//       ...customerIdValue,
//       id: customersIdList[index],
//     }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };

// ALEXANDR
// const getCustomersList = obj => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   console.log(arr);
//   console.log(obj);

//   return arr;
// };

// VITALII
// BAD
// 1.don't use shift
// 2.fix eslint errors
// 3.bad naming
// const getCustomersList = obj => {
//   const moderArr = Object.entries(obj).map(arr => {
//     let id = { id: arr.shift() };
//     return (arr[0] = { ...arr[0], ...id });
//   });

//   return moderArr.sort((a, b) => a.age - b.age);
// };

// EVGEN
// 1.don't use index
// 2.bad naming
// const getCustomersList = customers =>
//   Object.keys(customers)
//     .reduce((acc, elem, index) => {
//       acc[index] = { id: elem, ...customers[elem] };
//       return acc;
//     }, [])
//     .sort((a, b) => a.age - b.age);

// DIMA
// BAD
const getCustomersList = obj => {
  // obj is the object we want to get the keys from
  const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
  const first = order.map(el => el[1]); // get the values
  const second = order.map(el => el[0]); // get the keys
  return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
};

// test data
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 20,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 17,
  },
  'customer-id-4': {
    name: 'John',
    age: '22',
  },
  'customer-id-5': {
    name: 'Oscar',
    age: undefined,
  },
  'customer-id-6': {
    name: 'Ann',
    age: null,
  },
  'customer-id-7': {},
  'customer-id-8': {
    name: 'Jim',
    age: NaN,
  },
};

console.log(getCustomersList(customers));
