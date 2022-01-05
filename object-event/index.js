let elem = document.querySelector("#elem");
elem.addEventListener("click", function (event) {
  console.log(event);
});

// let PointerEvent1 = {
// isTrusted: true,
// pointerId: 1,
// width: 1,
// height: 1,
// pressure: 0,
// tiltX: 0,
// tiltY: 0,
// azimuthAngle: 0,
// altitudeAngle: 1.5707963267948966,
// tangentialPressure: 0,
// twist: 0,
// pointerType: "mouse",
// isPrimary: false,
// getCoalescedEvents: getCoalescedEvents() {},
// getPredictedEvents: getPredictedEvents() {},
// screenX: 272,
// screenY: 567,
// clientX: 24,
// clientY: 14,
// ctrlKey: false,
// shiftKey: false,
// altKey: false,
// metaKey: false,
// button: 0,
// buttons: 0,
// relatedTarget: null,
// pageX: 24,
// pageY: 14,
// x: 24,
// y: 14,
// offsetX: 14,
// offsetY: 4,
// movementX: 0,
// movementY: 0,
// fromElement: null,
// toElement: null,
// layerX: 24,
// layerY: 14,
// getModifierState: ƒ getModifierState() {},
// initMouseEvent: ƒ initMouseEvent() {},
// view: Window,
// detail: 1,
// sourceCapabilities: InputDeviceCapabilities,
// which: 1,
// initUIEvent: ƒ initUIEvent() {},
// type: "click",
// target:
// <button id="elem">text</button>,
// currentTarget: null,
// eventPhase: 0,
// bubbles: true,
// cancelable: true,
// defaultPrevented: false,
// composed: true,
// timeStamp: 210486.80000001192,
// srcElement:
// <button id="elem">text</button>,
// returnValue: true,
// cancelBubble: false,
// path: Array(6),
// NONE: 0,
// CAPTURING_PHASE: 1,
// AT_TARGET: 2,
// BUBBLING_PHASE: 3,
// composedPath: ƒ composedPath() {},
// initEvent: ƒ initEvent() {},
// preventDefault: ƒ preventDefault() {},
// stopImmediatePropagation: ƒ stopImmediatePropagation() {},
// stopPropagation: ƒ stopPropagation() {},
// <constructor>: "PointerEvent",
// ​};

// координати події
let elem2 = document.getElementById("elem2");
let elem3 = document.getElementById("elem3");

document.addEventListener("mousemove", function (event) {
  elem2.innerHTML = event.clientX + " : " + event.clientY;
  elem3.innerHTML = event.pageX + " : " + event.pageY;
});

// dispatchEvent
let button = document.querySelector("#button");
button.addEventListener("click", function () {
  alert("message");
});

button.addEventListener("mouseover", function () {
  let clickEvent = new Event("click");
  this.dispatchEvent(clickEvent);
});

let button2 = document.querySelector("#button2");

button2.addEventListener("showMessage", function () {
  alert("Message");
});

button2.addEventListener("mouseover", function () {
  let showMsg = new Event("showMessage");
  this.dispatchEvent(showMsg);
});

// methods of element: focus and blur
let input = document.querySelector("#input");
let focusEl = document.querySelector("#focus");
let blurEl = document.querySelector("#blur");

focusEl.addEventListener("click", function () {
  input.focus();
});

blurEl.addEventListener("click", function () {
  input.blur();
});

// methods of function: call, apply, bind
function func(param1, param2, param3) {
  console.log(this.value + param1 + param2 + param3);
}

let elem4 = document.querySelector("#elem4");
func.call(elem4, 1, 2, 3);
func.apply(elem4, ["a", "b", "c"]);

function func2() {
  console.log(this.value);
}
func2.call(elem4);
func2.apply(elem4);

newFunc = func.bind(elem4);
newFunc(1, 2, 3); // 'text123'
//
func = func.bind(elem4);

// тип події в обєкті event
let elem5 = document.querySelector("#elem5");

elem5.addEventListener("click", function (event) {
  console.log(event.type); // 'click'
});

// ex 1
let elem6 = document.querySelector("#elem6");

elem6.addEventListener("click", func3);
elem6.addEventListener("dblclick", func3);

function func3(event) {
  console.log(event.type);
  if (event.type === "click") {
    elem6.style.backgroundColor = "green";
  } else if (event.type === "dblclick") {
    elem6.style.backgroundColor = "red";
  }
}

// елемент події в обєкті event
let elem7 = document.querySelector("#elem7");
elem7.addEventListener("click", function (event) {
  console.log(event.target);
  console.log(this);
});

// ex 1
let elem8 = document.querySelector("#elem8");
elem8.addEventListener("click", function (event) {
  let tag = event.target.tagName;
  if (tag === "LI") {
    event.target.innerHTML += "!";
  }
});

// отримання нажатих клавіш
// ex 1
let elem9 = document.querySelector("#elem9");
let elem10 = document.querySelector("#elem10");

elem9.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    elem10.innerHTML = event.target.value;
    event.target.value = "";
  }
});

let elem11 = document.querySelector("#elem11");
elem11.addEventListener("click", function (event) {
  if (event.ctrlKey) {
    alert("нажат Ctrl");
  } else if (event.altKey) {
    alert("нажат Alt");
  } else if (event.shiftKey) {
    alert("нажат Shift");
  }
});

// ex 1
let elem12 = document.querySelector("#elem12");
elem12.addEventListener("click", function (event) {
  if (event.altKey) {
    elem12.style.backgroundColor = "red";
  }
});

// ex 2
let elem13 = document.querySelector("#elem13");
elem13.addEventListener("click", function (event) {
  let tag = event.target.tagName;
  if (tag === "LI") {
    if (event.ctrlKey) {
      event.target.innerHTML += 1;
    } else if (event.shiftKey) {
      event.target.innerHTML += 2;
    }
  }
});

// preventDefault method in Event
let elem14 = document.querySelector("#elem14");
elem14.addEventListener("click", function (event) {
  event.preventDefault();
  alert("You can't go to this page");
});

// ex1
let elem15 = document.querySelector("#elem15");
elem15.addEventListener("click", () => changeText(elem15, event));

let elem16 = document.querySelector("#elem16");

elem16.addEventListener("click", () => changeText(elem16, event));

function changeText(elem, event) {
  elem.innerHTML += elem.href;
  event.preventDefault();
}

// ex2
let elem19 = document.querySelector("#elem19");
let elem20 = document.querySelector("#elem20");

function countNumbers() {
  let elem17 = document.querySelector("#elem17").value;
  let elem18 = document.querySelector("#elem18").value;
  return +elem17 + +elem18;
}

elem20.addEventListener("click", function (event) {
  elem19.innerHTML = "";
  event.preventDefault();
  elem19.innerHTML += "Result: " + countNumbers();
});

// всплиття подій
let elem21 = document.querySelector("#elem21");
let elem22 = document.querySelector("#elem22");
let elem23 = document.querySelector("#elem23");

elem21.addEventListener("click", function () {
  alert("elem21");
});

elem22.addEventListener("focus", function () {
  alert("elem22");
});

elem23.addEventListener("click", function () {
  alert("elem23");
});

// Получение целевого элемента при всплытии событий
// event.target.matches();
let elem24 = document.querySelector("#elem24");
elem24.addEventListener("click", function (event) {
  // alert('click');
  // console.log(this);
  // console.log(event.target);
  // if (event.target.tagName === "DIV") {
  //   alert("Click on div");
  // } else if (event.target.tagName === "P") {
  //   alert("click on p");
  // }
  if (event.target.matches("div")) {
    alert("clicked on div");
  } else if (event.target.matches("p")) {
    alert("clicked on p");
  }
});

// ex1
let elem25 = document.querySelector("#elem25");
elem25.addEventListener("click", function (event) {
  alert(event.target.tagName);
});

// ex2
let num = 3;
elem25.addEventListener("click", function (event) {
  if (event.target.matches("li")) {
    event.target.innerHTML += "!";
  } else if (event.target.matches("ul")) {
    num += 1;
    let liEl = document.createElement("LI");
    let textNode = document.createTextNode(num);
    liEl.appendChild(textNode);
    event.target.appendChild(liEl);
  }
});

// Прекращение всплытия событий в JavaScript
let elem26 = document.querySelector("#elem26");
let elem27 = document.querySelector("#elem27");
let elem28 = document.querySelector("#elem28");
elem26.addEventListener("click", function () {
  alert("text1");
});
elem27.addEventListener("click", function (event) {
  event.stopPropagation();
  //   event.stopImmediatePropagation();
  alert("text2");
});
elem28.addEventListener("click", function () {
  alert("text3");
});

// ex 1
let elem29 = document.querySelector("#elem29");
let elem30 = document.querySelector("#elem30");
let elem31 = document.querySelector("#elem31");

elem30.addEventListener("click", function (event) {
  event.stopPropagation();
  elem31.classList.add("active");
});

elem29.addEventListener("click", function () {
  // elem30.stopPropagation();
  elem31.classList.remove("active");
});

// Погружение событий
let elem32 = document.querySelector("#elem32");
let elem33 = document.querySelector("#elem33");
let elem34 = document.querySelector("#elem34");

elem32.addEventListener(
  "click",
  function () {
    alert("всплытия 32");
  },
  false
);

elem32.addEventListener(
  "click",
  function () {
    alert("погружение 32");
  },
  true
);

elem33.addEventListener(
  "click",
  function () {
    alert("погружение 33");
  },
  true
);
elem33.addEventListener(
  "click",
  function () {
    alert("всплытия 33");
  },
  false
);
elem34.addEventListener(
  "click",
  function () {
    alert("погружение 34");
  },
  true
);
elem34.addEventListener(
  "click",
  function () {
    alert("всплытия 34");
  },
  false
);

// Навешивание обработчиков на новые элементы
let elem35 = document.querySelector("#elem35");
let elem36 = document.querySelector("#elem36");
let items = document.querySelectorAll(".li");

function handler() {
  return (this.innerHTML += "!");
}

for (let item of items) {
  item.addEventListener("click", handler);
}

elem36.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerHTML = "item";
  elem35.appendChild(item);

  item.addEventListener("click", handler);
});

// Делегирование событий
elem35.addEventListener("click", function (event) {
  let li = event.target.closest("li");
  if (li) {
    event.target.innerHTML += "!";
  }
});

elem36.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerHTML = "item";
  elem35.appendChild(item);
});
