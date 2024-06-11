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

const createHelpSection = () => {
  let clicked = false;

  const calculator = selectElement(".calculator");
  const instructionsDiv = selectElement(".instructions");

  const helpSection = selectElement(".help-section");
  helpSection.onclick = () => {
    if (clicked === false) {
      clicked = true;
      instructionsDiv.classList.remove("hidden");
      calculator.classList.add("blur");
      helpSection.style.width = "25rem";
      helpSection.style.height = "100vh";
      helpSection.style.backgroundColor = "aliceblue";
      return;
    }

    clicked = false;
    instructionsDiv.classList.add("hidden");
    calculator.classList.remove("blur");
    helpSection.style.width = "5rem";
    helpSection.style.height = "5rem";
    helpSection.style.backgroundColor = "";
  };
};

const main = () => {
  const input = selectElement(".input");
  const result = selectElement(".result");
  const elements = getElements();

  createHelpSection();

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
