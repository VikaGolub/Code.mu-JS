// data
let data = [2025, 12, 31];
let [year, month, day] = data;

// ex 1
let arr = ["Иван", "Иванов", "отдел разработки", "программист", 2000];
let [name, surname, department, position, salary] = arr;

// destructurisation with function
function func() {
  return [2021, 12, 28];
}

let [year1, month1, day1] = func();

// ex 2
function worker() {
  return ["Иван", "Иванов", "отдел разработки", "программист", 2000];
}

let [name1, surname1, department1, position1, salary1] = worker();

let [, month2, day2] = data;
let [, , day3] = data;

// ex 3
let [, , department2, position2] = arr;

//variables more than values
let data2 = [2021, 12];
let [year4, month4, day4] = data2;
console.log(day4); // undefined

// skipping values
let data3 = [2025, 12, 31, 23, 59, 59];
let [year5, month5, day5] = data3;

// remainder
let data4 = [2025, 12, 31, 23, 59, 59];
let [year6, month6, day6, ...time] = data4;
console.log(time); // [23, 59, 59]

// ex 4
let [name3, surname3, ...info] = arr;
console.log(info); // ['отдел разработки', 'программист', 2000]

let [year7, month7, day7 = 15] = data2;
console.log(day7); // 15

// ex 5
let [name4, surname4, department4, position4 = "джуниор"] = arr;
console.log(position4); // 'программист'

// ex 6
function getDay() {
  return new Date().getDate();
}
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let [year8 = currentYear, month8 = currentMonth, day8 = getDay()] = data2;
