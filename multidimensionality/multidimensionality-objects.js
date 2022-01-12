let obj = {
  a: {
    key1: "a1",
    key2: "a2",
    key3: "a3",
  },
  b: {
    key1: "b1",
    key2: "b2",
    key3: "b3",
  },
  c: {
    1: "c1",
    2: "c2",
    3: "c3",
  },
};

console.log(obj["a"]["key1"]); // a1
console.log(obj["c"][1]); // c1
console.log(obj.a.key1); // a1
console.log(obj["a"].key1); // a1
console.log(obj.a["key1"]); // a1
console.log(obj.c[1]); // c1

// ex 68.1 (дописати)
let obj2 = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};

let sum = 0;

for (let key in obj2) {
  let subObj = obj2[key];
  for (let j in subObj) {
    sum += subObj[j];
  }
}

console.log(sum);

// ex 68.2
let obj3 = {
  1: {
    1: "a1",
    2: "a2",
    3: "a3",
  },
  2: {
    1: "b1",
    2: "b2",
    3: "b3",
  },
  3: {
    1: "c1",
    2: "c2",
    3: "c3",
  },
};

console.log(obj3[2][2]); // b2
console.log(obj3[3][1]); // c1

// ex 68.3 // дописати
let obj1 = {
  key1: {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4,
    },
    f: 5,
  },
  key2: {
    g: 6,
    h: 7,
  },
};

let sum2 = 0;
for (let key in obj1) {
  let subObj = obj1[key];
  for (let j in subObj) {
    if (typeof subObj[j] !== "number") {
      for (let k in subObj[j]) {
        sum2 += subObj[j][k];
      }
    } else {
      sum2 += subObj[j];
    }
  }
}

console.log("sum2", sum2);
// Перебор многомерных объектов
let obj4 = {
  a: {
    1: "a1",
    2: "a2",
    3: "a3",
  },
  b: {
    1: "b1",
    2: "b2",
    3: "b3",
  },
  c: {
    1: "c1",
    2: "c2",
    3: "c3",
  },
};

for (let key in obj4) {
  let subObj = obj[key];
  for (let j in subObj) {
    // console.log(subObj[j]);
  }
}

let obj5 = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
};

let sum1 = 0;
for (let key in obj5) {
  let subObj = obj5[key];
  for (let num in subObj) {
    sum1 += subObj[num];
  }
}

console.log(sum1);

// Ключи из переменных в многомерных структурах
let obj6 = {
  ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  en: ["mn", "ts", "wd", "th", "fr", "st", "sn"],
};

console.log(obj6["ru"][3]);

let lang = "ru";
let day = 3;
console.log(obj6[lang][day]);

// ex 1
let months = {
  ru: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ],
  en: [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ],
};

let lang1 = "ru";
let month = 5;

console.log(months[lang1][month]);

// ex 2
let affairs = {
  2018: {
    11: {
      29: ["дело111", "дело112", "дело113"],
      30: ["дело121", "дело122", "дело123"],
    },
    12: {
      30: ["дело211", "дело212", "дело213"],
      31: ["дело221", "дело222", "дело223"],
    },
  },
  2019: {
    12: {
      29: ["дело311", "дело312", "дело313"],
      30: ["дело321", "дело322", "дело323"],
      31: ["дело331", "дело332", "дело333"],
    },
  },
};

let year = "2019";
let month1 = 12;
let day1 = 30;

console.log(affairs[year][month1][day1]);

// Многомерные массивы и объекты
// object with arrays
let days = {
  ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  en: ["mn", "ts", "wd", "th", "fr", "st", "sn"],
};

console.log(days["ru"][0]); // пн
console.log(days["en"][2]); // 'wd'

// array with objects
let users = [
  {
    name: "name1",
    age: 31,
  },
  {
    name: "name2",
    age: 32,
  },
  {
    name: "name3",
    age: 33,
  },
];

console.log(users[1]);
console.log(users[1]["name"]);
console.log(users[1].name);

// ex1
let employees = [
  {
    name: "name1",
    salary: 300,
  },
  {
    name: "name2",
    salary: 400,
  },
  {
    name: "name3",
    salary: 500,
  },
];

let salaryOfTwoEmployees = employees[0]["salary"] + employees[1]["salary"];

console.log(salaryOfTwoEmployees);

// ex 2
let students = {
  boys: ["Коля", "Вася", "Петя"],
  girls: ["Даша", "Маша", "Лена"],
};
// 'Вася' и элемент 'Лена'
console.log(students["boys"][1]);
console.log(students["girls"][2]);

// Перебор многомерных комбинаций
let users1 = [
  {
    name: "name1",
    age: 31,
  },
  {
    name: "name2",
    age: 32,
  },
  {
    name: "name3",
    age: 33,
  },
];

for (let user of users1) {
  document.write(user.name + " " + user.age + "<br>");
}

// ex 1
let employees1 = [
  {
    name: "name1",
    salary: 300,
  },
  {
    name: "name2",
    salary: 400,
  },
  {
    name: "name3",
    salary: 500,
  },
];

for (let empoyee of employees1) {
  document.write(
    "name: " + empoyee.name + " salary: " + empoyee.salary + "<br>"
  );
}

// ex 2;
let sumOfSalaries = 0;
for (let empoyee of employees1) {
  sumOfSalaries += empoyee.salary;
}

document.write(sumOfSalaries);

// ex 3
let employees2 = [
  {
    name: "name1",
    salary: 300,
    age: 28,
  },
  {
    name: "name2",
    salary: 400,
    age: 29,
  },
  {
    name: "name3",
    salary: 500,
    age: 30,
  },
  {
    name: "name4",
    salary: 600,
    age: 31,
  },
  {
    name: "name5",
    salary: 700,
    age: 32,
  },
];

let sumOfSalary = 0;

for (let employee of employees2) {
  if (employee.age >= 30) {
    sumOfSalary += employee.salary;
  }
}
document.write("<br>");
document.write(sumOfSalary);
document.write("<br>");

//ex 4
let employees3 = [
  {
    name: "name1",
    salary: 300,
    dismissed: false,
  },
  {
    name: "name2",
    salary: 400,
    dismissed: true,
  },
  {
    name: "name3",
    salary: 500,
    dismissed: false,
  },
  {
    name: "name4",
    salary: 600,
    dismissed: true,
  },
  {
    name: "name5",
    salary: 700,
    dismissed: false,
  },
];

for (let employee of employees3) {
  if (!employee.dismissed) {
    document.write(employee.name + " " + employee.salary + "<br>");
  }
}

// Сложные структуры
let students2 = {
  group1: ["student11", "student12", "student13"],
  group2: ["student21", "student22", "student23"],
  group3: ["student31", "student32"],
};

for (let group in students2) {
  // group = group1, group2, group3
  for (let name of students2[group]) {
    console.log(name);
  }
}

// ex 5
let data = {
  1: ["data11", "data12", "data13"],
  2: ["data21", "data22", "data23"],
  3: ["data31", "data32", "data33", "data34", "data35"],
  4: ["data41", "data42"],
};

for (let vals in data) {
  for (let val of data[vals]) {
    console.log(val);
  }
}

// ex 6
let data2 = [
  {
    1: "data11",
    2: "data12",
    3: "data13",
    4: "data14",
  },
  {
    1: "data21",
    2: "data22",
    3: "data33",
  },
  {
    1: "data31",
    2: "data32",
  },
];

for (let vals of data2) {
  for (let val in vals) {
    console.log(vals[val]);
  }
}

// ex 7
let data3 = [
  {
    1: ["data111", "data112", "data113"],
    2: ["data121", "data122", "data123"],
  },
  {
    1: ["data211", "data212", "data213"],
    2: ["data221", "data222", "data223", "data224"],
    3: ["data231", "data232", "data233", "data234", "data235"],
  },
  {
    1: ["data411", "data412", "data413"],
    2: ["data421"],
  },
];

for (let vals of data3) {
  for (let val in vals) {
    for (let v of vals[val]) {
      console.log(v);
    }
  }
}
