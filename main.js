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

const getElements = () => {
  const numbers = selectElements(".number");
  const enterKey = selectElement(".enter");
  const clearKey = selectElement(".clear");
  const deleteKey = selectElement(".delete");
  const operators = selectElements(".operator");

  return { numbers, enterKey, clearKey, deleteKey, operators };
};

const main = () => {
  const screen = selectElement(".screen");
  const elements = getElements();

  const view = new View(screen);
  const controller = new Controller(view, elements);
  controller.start();
};

window.onload = main;
