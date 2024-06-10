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
  const input = selectElement(".input");
  const result = selectElement(".result");
  const elements = getElements();

  const view = new View(input, result);
  const controller = new Controller(
    MouseController,
    KeyboardController,
    view,
    elements
  );
  controller.start();
};

window.onload = main;
