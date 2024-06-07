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

  const answerBoard = createElement(ELEMENTS.DIV);
  answerBoard.setAttribute(ATTRIBUTES.CLASS, "answerBoard");

  const numpad = createElement(ELEMENTS.DIV);
  numpad.setAttribute(ATTRIBUTES.CLASS, "numpad");

  const body = selectElement("body");
  body.appendChild(screen);
  body.appendChild(answerBoard);

  createNumpad();

  onkeydown = (event) => {
    const args = [];
    const query = screen.innerText;

    if (event.key === "+") {
      args.push(query);
      args.push("+");
    }

    if (event.key === "Backspace") {
      const newQuery = query.slice(0, -1);
      screen.innerText = newQuery;
      return;
    }

    if (event.code.includes("Digit") || event.key === "+") {
      const newQuery = query + event.key;
      screen.innerText = newQuery;
    }

    if (event.key === "=") {
      screen.innerText = "$";
      answerBoard.innerText = eval(query);
    }
  };
};

window.onload = main;
