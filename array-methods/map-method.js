// method map()
let arr = [1, 2, 3, 4, 5];
let result = arr.map((el) => console.log(el));
console.log(result); // (5) [undefined, undefined, undefined, undefined, undefined]

let result2 = arr.map((el) => el);
console.log(result2); // [1, 2, 3, 4, 5];

let result3 = arr.map(function (elem) {
  return elem * elem;
});

console.log(result3); //  [1, 4, 9, 16, 25]

let result4 = arr.map((elem) => {
  return 0;
});
console.log(result4); // [0, 0, 0, 0, 0]

// ex 1
let result5 = arr.map((el) => {
  return Math.sqrt(el);
});

// ex 2
let arr2 = ["cat", "dog", "pinguin"];
let result6 = arr2.map((el) => el + "!");
console.log(result6); // ['cat!', 'dog!', 'pinguin!']

// ex 3
let result7 = arr2.map((el) => el.split("").reverse().join(""));

// ex 4
let arr3 = ["123", "456", "789"];
let result8 = arr3.map((nArr) => {
  let sortedArr = nArr.split("");

  return sortedArr.map((num) => +num);
});
console.log(result8);

let arr4 = ["a", "b", "c", "d", "e"];
let result9 = arr4.map((elem, index) => elem + index);
console.log(result9); // ['a0', 'b1', 'c2', 'd3', 'e4']

// ex 5
let result10 = arr.map((num, ind) => num * ind);
console.log(result10); // (5) [0, 2, 6, 12, 20]

let arr5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let result11 = arr5.map((array) => {
  return array.map((num) => num * num);
});
console.log(result11);
