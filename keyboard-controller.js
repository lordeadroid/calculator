class KeyboardController {
  #display;
  #validNumberKeys;
  #validOperationKeys;
  #validKeyCodes;
  #deleteInput;
  #evaluate;

  constructor(display, deleteInput, evaluate) {
    this.#display = display;
    this.#deleteInput = deleteInput;
    this.#evaluate = evaluate;
    this.#validNumberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    this.#validOperationKeys = ["+", "-", "*", "/"];
    this.#validKeyCodes = [
      ...this.#validNumberKeys,
      ...this.#validOperationKeys,
    ];
  }

  #isValidKey(keyValue) {
    if (this.#validKeyCodes.includes(keyValue)) {
      return true;
    }

    return false;
  }

  #onKeyDown() {
    onkeydown = (event) => {
      const key = event.key;

      if (this.#isValidKey(key)) {
        this.#display(key);
        return;
      }

      if (key === "Backspace") {
        this.#deleteInput();
        return;
      }

      if (key === "=" || key === "Enter") {
        this.#evaluate();
      }
    };
  }

  start() {
    this.#onKeyDown();
  }
}