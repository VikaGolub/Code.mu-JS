// Multidimensionality
// ex 65.1
const arr = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
];

console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

// ex 65.2 (1-level array)
const arr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let result = arr2.reduce((acc, ar) => {
  for (let n of ar) {
    acc += n;
  }
  return acc;
}, 0);

console.log(result);

// ex 65.3 (3-level array)
const arr3 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

let result2 = arr3.reduce((acc, a) => {
  for (let a1 of a) {
    for (let n of a1) {
      acc += n;
    }
  }
  return acc;
}, 0);

console.log(result2);

// ex 65.4 (arbitrary array)
const arr4 = [
  [1, 2, 3, [4, 5, [6, 7]]],
  [8, [9, 10]],
];

let result3 = arr4.reduce((acc, ar) => {
  for (let el of ar) {
    if (typeof el === "number") {
      acc += el;
    } else if (typeof el === "object") {
      let sum = sumOfArray(el);
      acc += sum;
    }
  }
  return acc;
}, 0);

function sumOfArray(arr) {
  let sum = 0;

  for (let el of arr) {
    if (typeof el === "object") {
      return sumOfArray(el);
    }
    sum += el;
  }
  return sum;
}

console.log(result3);

// Перебор многомерных массивов
let arr5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8],
  [9, 10],
];

for (let subArr of arr5) {
  for (let elem of subArr) {
    console.log(elem);
  }
}

// ex  66.1
let arr6 = [[1, 2, 3], [4, 5], [6]];

let result4 = 0;
for (let ar of arr6) {
  for (let n of ar) {
    result4 += n;
  }
}

console.log(result4);

// ex 66.2
let arr7 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let result5 = 0;

for (let ar of arr7) {
  for (let ar1 of ar) {
    for (let n of ar1) {
      result5 += n;
    }
  }
}

console.log(result5);

// ex 66.3
let result6 = 0;
for (let i = 0; i < arr6.length; i++) {
  for (let j = 0; j < arr6[i].length; j++) {
    result6 += arr6[i][j];
  }
}

console.log(result6);

// arr7
let result7 = 0;
for (let i = 0; i < arr7.length; i++) {
  for (let j = 0; j < arr7[i].length; j++) {
    for (let k = 0; k < arr7[i][j].length; k++) {
      result7 += arr7[i][j][k];
    }
  }
}

console.log(result7);

// Заполнение многомерных массивов
let arr8 = [];
for (let i = 0; i < 3; i++) {
  arr8[i] = [];

  for (let j = 0; j < 3; j++) {
    // arr8[i][j] = j + 1;
    // or
    arr8[i].push(j + 1);
  }
}

console.log(arr8);

// ex 67.1

let arr9 = [];

for (let i = 0; i < 3; i++) {
  arr9[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr9[i].push(j);
  }
}

// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
console.log("arr9", arr9);

// ex  67.2
let arr10 = [];

for (let i = 0; i < 3; i++) {
  arr10[i] = [];
  for (let j = 0; j < 4; j++) {
    arr10[i].push("x");
  }
}

console.log("arr10", arr10);

// ex 67.3
let arr11 = [];
for (let i = 0; i < 3; i++) {
  arr11[i] = [];
  for (let j = 0; j < 2; j++) {
    arr11[i][j] = [];
    for (let k = 1; k <= 5; k++) {
      arr11[i][j].push(k);
    }
  }
}

console.log("arr11", arr11);

// Заполнение числами по порядку
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// variant1
let arr12 = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr12[i] = [];

  for (let j = 0; j < 3; j++) {
    arr12[i][j] = k;
    k++;
  }
}

console.log(arr12);

// variant2
let arr13 = [];
for (let i = 0, k = 1; i < 3; i++) {
  arr13[i] = [];

  for (let j = 0; j < 3; j++, k++) {
    arr13[i][j] = k;
  }
}

console.log("arr13", arr13);

// variant3
let arr14 = [];
for (let i = 0, k = 1; i < 3; i++) {
  arr14[i] = [];

  for (let j = 0; j < 3; j++) {
    arr14[i][j] = k++;
  }
}

console.log("arr14", arr14);

// ex 67.15
let arr15 = [];
for (let i = 0, k = 1; i < 4; i++) {
  arr15[i] = [];
  for (let j = 0; j < 2; j++) {
    arr15[i][j] = k;
    k++;
  }
}

console.log("arr15", arr15); // // [[1, 2], [3, 4], [5, 6], [7, 8]]

// ex 67.16
// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
let arr16 = [];
for (let i = 0, k = 2; i < 4; i++) {
  arr16[i] = [];
  for (let j = 0; j < 3; j++) {
    arr16[i][j] = k;
    k += 2;
  }
}

console.log("arr16", arr16);

// ex  67.17
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let arr17 = [];
for (let i = 0, k = 1; i < 2; i++) {
  arr17[i] = [];
  for (let j = 0; j < 2; j++) {
    arr17[i][j] = [];
    for (let t = 0; t < 2; t++) {
      arr17[i][j][t] = k;
      k++;
    }
  }
}

console.log("arr17", arr17);
