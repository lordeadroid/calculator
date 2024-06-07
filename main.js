const ELEMENTS = {
  DIV: "div",
  IMG: "img",
  MAIN: "main",
  SPAN: "span",
};

const ATTRIBUTES = {
  CLASS: "class",
  SRC: "src",
  ALT: "alt",
};

const createElement = (element) => document.createElement(element);
const selectElement = (element) => document.querySelector(element);

const createNumpad = () => {
  const keys = new Array(10)
    .fill(0)
    .map((num, index) => num + index)
    .reverse();
};

const main = () => {
  const container = createElement(ELEMENTS.DIV);
  container.setAttribute(ATTRIBUTES.CLASS, "calculator");

  const screen = createElement(ELEMENTS.DIV);
  screen.setAttribute(ATTRIBUTES.CLASS, "screen");

  const numpad = createElement(ELEMENTS.DIV);
  numpad.setAttribute(ATTRIBUTES.CLASS, "numpad");

  const body = selectElement("body");
  body.appendChild(screen);

  createNumpad();

  onkeydown = (event) => {
    const query = screen.innerText;

    if (event.code === "Backspace") {
      const newQuery = query.slice(0, -1);
      screen.innerText = newQuery;
      return;
    }

    if (event.code.includes("Digit")) {
      const newQuery = query + event.key;
      screen.innerText = newQuery;
    }
  };
};

window.onload = main;
