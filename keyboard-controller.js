class KeyboardController {
  #display;
  #validNumberKeys;
  #validOperationKeys;
  #validKeyCodes;
  #deleteInput;
  #evaluate;
  #clearScreen;

  constructor(display, deleteInput, evaluate, clearScreen) {
    this.#display = display;
    this.#deleteInput = deleteInput;
    this.#evaluate = evaluate;
    this.#clearScreen = clearScreen;
    this.#validNumberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    this.#validOperationKeys = ["+", "-", "*", "/", "(", ")"];
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

      if (event.altKey) {
        switch (key) {
          case "c":
            return this.#clearScreen();
        }
      }

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
