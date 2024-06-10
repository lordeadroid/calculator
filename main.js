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
const selectElements = (element) => document.querySelectorAll(element);

const main = () => {
  const screen = selectElement(".screen");
  const numbers = selectElements(".number");

  const view = new View(screen);
  const keyboardController = new KeyboardController(view);
  const mouseController = new MouseController(view, numbers);

  keyboardController.start();
  mouseController.start();
};

window.onload = main;
