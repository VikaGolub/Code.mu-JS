function func([year, month, day]) {
  console.log(year); // 2021
  console.log(month); // 12
  console.log(day); // 31
}
func([2021, 12, 31]);

// we can add aditional parameters
function func2(param1, [year, month, day], param2) {
  console.log(param1); // str1
  console.log(year);
  console.log(month);
  console.log(day);
  console.log(param2); // str2
}
func2("str1", [2021, 12, 31], "str2");

// destructuring with 2 params
function func3([year1, month1, day1], [year2, month2, day2]) {
  console.log(year1);
  console.log(month1);
  console.log(day1);
  console.log(year2);
  console.log(month2);
  console.log(day2);
}
func3([2025, 12, 31], [2026, 11, 30]);

// ex 1
function getInfo([name, surname, department, position, salary]) {
  console.log(name);
  console.log(surname);
  console.log(department);
  console.log(position);
  console.log(salary);
}

getInfo(["Иван", "Иванов", "отдел разработки", "программист", 2000]);

// ex 2
function getInfo2([name, surname, ...info]) {
  console.log(name);
  console.log(surname);
  console.log(info);
}

getInfo2(["Иван", "Иванов", "отдел разработки", "программист", 2000]);

// ex 3
function getInfo3([name, surname, department, position = "джуниор"]) {
  console.log(name);
  console.log(surname);
  console.log(department);
  console.log(position);
}

getInfo3(["Иван", "Иванов", "отдел разработки"]);

// ex 4
function getInfo4(department, [name, surname], [year, month, day]) {
  console.log(department);
  console.log(name);
  console.log(surname);
  console.log(year);
  console.log(month);
  console.log(day);
}

getInfo4("отдел разработки", ["Иван", "Иванов"], [2018, 12, 31]);

// objects in params
function getDate({ year, month, day }) {
  console.log(year); // 2021
  console.log(month); // 12
  console.log(day); // 31
}
getDate({ year: 2021, month: 12, day: 31 });

// ex 5
function description({ color, width, height }) {
  console.log(color);
  console.log(width);
  console.log(height);
}

description({ color: "red", width: 400, height: 500 });

// ex 6
function description2({ width, height, color = "black" }) {
  console.log(color);
  console.log(width);
  console.log(height);
}

description2({ color: "red", width: 400, height: 500 });
