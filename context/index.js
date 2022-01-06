// контекст this
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");

elem1.addEventListener("blur", func); // 'text1'
elem2.addEventListener("blur", func); // 'text2'

function func() {
  alert(this.value);
}

// Контекст непривязанной функции
function func() {
  console.log(this); // обєкт window
}

// Потеря контекста
let elem3 = document.querySelector("#elem3");
elem3.addEventListener("blur", parent);

function parent() {
  console.log(this); // <input id="elem3" value="text3" />

  function child() {
    console.log("child " + this); // child undefined
  }
  child();
}

// ex 1
let elem4 = document.querySelector("#elem4");
elem4.addEventListener("blur", func1);

function func1() {
  const self = this;
  alert(squere());

  function squere() {
    return self.value * self.value;
  }
}

// ex 2
elem4.addEventListener("blur", func2);

function func2() {
  alert(squere(this));

  function squere(param) {
    return param.value * param.value;
  }
}

// ex 3
elem4.addEventListener("blur", func3);

function func3() {
  let child = () => {
    return this.value * this.value;
  };
  alert(child());
}
