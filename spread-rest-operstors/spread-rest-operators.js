// Spread and rest operators (code.mu)
// 126

const arr = [1, 2, 3, 4, 5];
let max = Math.max(...arr);
let min = Math.min(...arr);

// 127 with arrays

let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // [1, 2, 3]

// 128 spread with strings

let arr3 = [..."abcde"]; // ['a', 'b', 'c', 'd', 'e']
let arr4 = [..."12345"]; // ['1', '2', '3', '4', '5']
let arr5 = [..."12345", ..."56789"]; // ['1', '2', '3', '4', '5', '5', '6', '7', '8', '9']

let arr6 = ["a", "b", "c"];
let arr7 = [...arr6, ..."12345"]; // ['a', 'b', 'c', '1', '2', '3', '4', '5']

// spread doesn't work with nums;
// let arr8 = [...12345] // TypeError
let arr8 = [...String(12345)]; // ['1', '2', '3', '4', '5']

// 129 Rest operators (takes params as an array)

func(1, 2, 3, 4, 5);

function func(a, b, ...rest) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(rest); // [3, 4, 5]
}

function func1(...rest) {
  console.log(rest); // [1, 2, 3, 4, 5];
}

func1(1, 2, 3, 4, 5);

// 130 Operators spread and rest
function sum(...nums) {
  let sumNum = 0;
  for (let num of nums) {
    sumNum += num;
  }
  return sumNum;
}

sum(1, 2, 3); // 6

function avg(...nums) {
  let avgNum = 0;
  for (let num of nums) {
    avgNum += num;
  }
  return avgNum / nums.length;
}

avg(1, 4, 5); // 3.33

// two-dimensional (двухмірні) arrays
function unite(...arrs) {
  return arrs;
}

unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let arr9 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let result = [].concat(...arr9); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

function merge(...args) {
  return [].concat(...args);
}

merge(arr9);

function makeArr(arr1, arr2, arr3) {
  return [...arr1, ...arr2, ...arr3];
}

makeArr([1, 2, 3], [4, 5, 6], [7, 8, 9]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 131  // find similar elems (Do this task again)

function getInt(...arrs) {
  let result = [];

  let arr0 = arrs[0];

  for (let elem of arr0) {
    if (inArrays(elem, arrs)) {
      result.push(elem);
    }
  }

  return result;
}

function inArrays(elem, arrs) {
  for (let arr of arrs) {
    if (!inArray(elem, arr)) {
      return false;
    }
  }

  return true;
}

function inArray(elem, arr) {
  return arr.indexOf(elem) !== -1;
}

let result2 = getInt([1, 2, 3, 4], [2, 3, 4], [4, 3, 2]);
console.log(result2); // [2, 3, 4]
