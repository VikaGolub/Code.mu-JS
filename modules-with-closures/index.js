// замикання. Конфликты переменных
// alert("hello");
// let str = "text from js file";

(function () {})();

(function () {
  let str = "variable of module";
  function func() {
    alert("function of module");
  }
})();

// they won't be available here
// alert(str);
// alert(func());

// Модули через замыкания
(function () {
  let elem = document.querySelector("#div1");

  function func1(num) {
    return num * num;
  }

  elem.addEventListener("click", function () {
    this.textContent = func1(elem.textContent);
  });
})();

(function () {
  let elem = document.querySelector("#div2");

  function func2(num) {
    return num * num * num;
  }

  elem.addEventListener("click", function () {
    this.innerHTML = func2(this.innerHTML);
  });
})();

// Передача параметров в модуль через замыкания
(function (arg1, arg2) {
  // code
})(1, 2);

(function () {
  let div = document.querySelector("#div3");
  let btn = document.querySelector("#btn");

  function func(num) {
    return num * num;
  }

  btn.addEventListener("click", function () {
    div.textContent = func(div.textContent);
  });
})();

//
(function (selector1, selector2) {
  let div = document.querySelector(selector1);
  let btn = document.querySelector(selector2);

  function func(num) {
    return num * num;
  }

  btn.addEventListener("click", function () {
    div.textContent = func(div.textContent);
  });
})("#div3", "#btn");

// ex1
(function (arg1, arg2, arg3, btn) {
  let result = document.querySelector(btn);

  function sum(...nums) {
    let res = 0;
    for (let num of nums) {
      res += +num;
    }
    return res;
  }

  result.addEventListener("click", function () {
    let num1 = document.querySelector(arg1).value;
    let num2 = document.querySelector(arg2).value;
    let num3 = document.querySelector(arg3).value;
    let showSum = sum(num1, num2, num3);
    console.log(showSum);
  });
})("#elem1", "#elem2", "#elem3", "#btn3");

// Передача родительского элемента в модуль через замыкания
// замість того щоб передавати всі параметри
(function (root) {
  let parent = document.querySelector(root);
  let div1 = parent.querySelector("#elem4");
  let div2 = parent.querySelector("#elem5");
  let div3 = parent.querySelector("#elem6");

  let res = parent.querySelector("#res");
  let btn = parent.querySelector("#btn4");

  btn.addEventListener("click", function () {
    let num1 = Number(div1.textContent);
    let num2 = Number(div2.textContent);
    let num3 = Number(div3.textContent);

    res.textContent = num1 + num2 + num3;
  });
})("#parent");

// Передача настроек модуля через замыкания
(function (root, type, amount) {
  let parent = document.querySelector(root);

  for (let i = 1; i <= amount; i++) {
    let elem = document.createElement(type);
    elem.innerHTML = i;
    parent.append(elem);
  }
})("#parent2", "p", 5);

let config = {
  root: "#parent2",
  type: "p",
  amount: 5,
};

(function ({ root, type = "p", amount = 5 }) {
  let parent = document.querySelector(root);

  for (let i = 1; i <= amount; i++) {
    let elem = document.createElement(type);
    elem.innerHTML = i;
    parent.append(elem);
  }
})(config);

// Экспорт переменных и функций в модулях через замыкания
(function () {
  let str = "variable of module";

  function func2() {
    alert("function of module. show this");
  }

  window.func = func2;
})();

// func();

// ex1
(function () {
  let str1 = "переменная модуля";
  let str2 = "переменная модуля";
  let str3 = "переменная модуля";

  function func1() {
    alert("функция модуля1");
  }
  function func2() {
    alert("функция модуля2");
  }
  function func3() {
    alert("функция модуля3");
  }

  window.str1 = str1;
  window.func2 = func2;
  window.func3 = func3;
})();

// alert(str1);
// func2();
// func3();

// export of object (to export 3 funcs all together)
(function () {
  function func1() {
    alert("функция модуля");
  }
  function func2() {
    alert("функция модуля");
  }
  function func3() {
    alert("функция модуля");
  }

  // window.module = {func1: func1, func2: func2, func3: func3}
  window.module = { func1, func2, func3 };
})();

// 2nd variant
(function () {
  let module = {};

  module.func1 = function () {
    alert("функция модуля");
  };

  module.func2 = function () {
    alert("функция модуля");
  };
  module.func3 = function () {
    alert("функция модуля");
  };

  window.module2 = module;
})();

// ex 2
(function () {
  let module3 = {};
  module3.str1 = "переменная модуля";
  module3.str2 = "переменная модуля";
  let str3 = "переменная модуля";

  module3.func1 = function () {
    alert("функция модуля");
  };
  module3.func2 = function () {
    alert("функция модуля");
  };
  module3.func3 = function () {
    alert("функция модуля");
  };
  module3.func4 = function () {
    alert("функция модуля");
  };
  module3.func5 = function () {
    alert("функция модуля");
  };

  window.module3 = module3;
})();
