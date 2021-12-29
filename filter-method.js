let arr = [1, 2, 3, 4, 5];

let result = arr.filter((elem) => {
  return elem % 2 === 0 ? true : false;
});
console.log(result); // [2, 4]

// same code in shorter form
let result2 = arr.filter((elem) => elem % 2 === 0);

// ex 1
let arr1 = [-4, 4, 3, -2, 0, 1];
let result3 = arr1.filter((num) => num > 0);
console.log(result3); // [4, 3, 1]

// ex 2
let result4 = arr1.filter((num) => num < 0);
console.log(result4);

// ex 3
let arr2 = [32, 4, 76, 10, 9, -2];
let result5 = arr2.filter((num) => num > 0 && num < 10);
console.log(result5); // [4, 9]

// ex 4
let arr3 = ["sky", "blueberry", "watermelon", "abricot", "red"];
let result6 = arr3.filter((word) => word.length > 5);
console.log(result6);

// ex 5
let result7 = arr2.filter((num, ind) => num * ind < 30);
console.log(result7); // [32, 4, -2]

// ex 6
let arr4 = [1, 2, [3, 4], 5, [6, 7]];
let result8 = arr4.filter((elem) => typeof elem === "number");
console.log(result8); // [1, 2, 5]

// count even elements in array
let result9 = arr2.filter((num) => num % 2 === 0).length;
console.log(result9); // 5

// ex 7
let result10 = arr1.filter((num) => num < 0).length;
console.log(result10); // 2
