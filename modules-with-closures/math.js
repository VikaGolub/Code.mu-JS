(function () {
  function square(num) {
    return num ** 2;
  }
  function cube(num) {
    return num ** 3;
  }
  function avg(arr) {
    return sum(arr, 1) / arr.length;
  }
  function digitsSum(num) {
    return sum(String(num).split(""));
  }

  // вспомогательная функция
  function sum(arr) {
    let res = 0;

    for (let elem of arr) {
      res += +elem;
    }

    return res;
  }

  window.math = { square, cube, avg, digitsSum };
})();

// Библиотеки через замыкания
// ex1
(function () {
  function avg1(arr) {
    return sum(arr, 1) / arr.length;
  }

  function avg2(arr) {
    return sum(arr, 2) / arr.length;
  }

  function avg3(arr) {
    return sum(arr, 3) / arr.length;
  }

  // вспомогательная функция
  function sum(arr, pow) {
    let res = 0;

    for (let elem of arr) {
      res += elem ** pow;
    }

    return res;
  }

  window.math2 = { avg1, avg2, avg3 };
})();
