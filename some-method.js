let arr = [2, 4, 6, 8];
let result = arr.some((num) => num % 2 === 0);
console.log(result); // true

let result2 = arr.some((num) => num > 0);
console.log(result2); // true

let result3 = arr.some((num, ind) => num * ind > 30);
console.log(result3); // false
