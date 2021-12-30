// destruction with objects
let obj = {
  year: 2025,
  month: 12,
  day: 31,
};

// when we use destruction for objects, names of variables
// should be the same as keys
let { year, month, day } = obj;

console.log(year); // 2025
console.log(month); // 12
console.log(day); // 31

// ex 1
let options = {
  color: "red",
  width: 400,
  height: 500,
};

let { color, width, height } = options;
console.log(`color: ${color}, width: ${width}, height: ${height}`);

// change the name for variables
let { year: y, month: m, day: d } = obj;
console.log(`year: ${y}, month: ${m}, day: ${d}`);

// ex 2
let { color: c, width: w, height: h } = obj;

// ex 3
let options2 = {
  width2: 400,
  height2: 500,
};

let { color2 = "black", width2, height2 } = options2;

let obj2 = {
  month2: 12,
  day2: 31,
};

let { year2: y2 = 2024, month2, day2 } = obj;

// ex 4
let options3 = {
  width3: 400,
  height3: 500,
};

let { color3: c3 = "black", width3: w3, height3: h3 } = options3;

// result of function as a value
function getYear() {
  return new Date().getFullYear();
}

let obj3 = {
  month3: 12,
  day3: 31,
};

let { year3 = getYear(), month3, day3 } = obj3;

function getDate() {
  return (obj = {
    year4: 2025,
    month4: 12,
    day4: 31,
  });
}

let { year4, month4, day4 } = getDate();

// syntax when we write the name of variables before
let obj5 = {
  year5: 2025,
  month5: 12,
  day5: 31,
};

let year5, month5, day5;
({ year5, month5, day5 } = obj5);
