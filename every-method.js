let arr = [2, 4, 6, 8, 10];
let result = arr.every((elem) => {
  return elem % 2 === 0;
});
console.log(result); // true

// ex 1
let result2 = arr.every((num) => num > 0);
console.log(result2); // true

// ex 2
let result3 = arr.every((num, ind) => num * ind < 30);
console.log(result3); // false
