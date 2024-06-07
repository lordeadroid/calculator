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

const main = () => {
  const screen = selectElement(".screen");

  const view = new View(screen);
  const controller = new KeyboardController(view);
  controller.start();
};

window.onload = main;
