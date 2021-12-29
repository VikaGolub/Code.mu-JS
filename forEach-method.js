let arr = ["a", "b", "c", "d", "e"];
arr.forEach((elem) => document.write(elem + "<br>"));
arr.forEach((elem) => document.write(elem + "<br>"));

arr.forEach((elem, index) => document.write(index + "." + elem + "<br>"));

let arr1 = [1, 2, 3, 4, 5];
let sum = 0;

arr1.forEach((elem) => {
  sum += elem;
});
console.log(sum); // 15

// ex 1
let result = 0;
arr1.forEach((elem) => {
  return (result += elem * elem);
});
console.log(result); // 55
