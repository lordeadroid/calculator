class KeyboardController {
  #display;
  #validNumberKeys;
  #validOperationKeys;
  #validKeyCodes;
  #deleteInput;
  #evaluate;
  #clearScreen;
  #evaluationKeys;
  #backspaceKey;

  constructor(display, deleteInput, evaluate, clearScreen) {
    this.#display = display;
    this.#deleteInput = deleteInput;
    this.#evaluate = evaluate;
    this.#clearScreen = clearScreen;
    this.#validNumberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    this.#validOperationKeys = ["+", "-", "*", "/", "(", ")"];
    this.#evaluationKeys = ["=", "Enter"];
    this.#backspaceKey = "Backspace";
    this.#validKeyCodes = [
      ...this.#validNumberKeys,
      ...this.#validOperationKeys,
    ];
  }

  #isValidKey(keyValue) {
    return this.#validKeyCodes.includes(keyValue);
  }

  #isEvaluationKey(keyValue) {
    return this.#evaluationKeys.includes(keyValue);
  }

  #isBackspaceKey(keyValue) {
    return keyValue === this.#backspaceKey;
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
        return this.#display(key);
      }

      if (this.#isBackspaceKey(key)) {
        return this.#deleteInput();
      }

      if (this.#isEvaluationKey(key)) {
        return this.#evaluate();
      }
    };
  }

  start() {
    this.#onKeyDown();
  }
}
