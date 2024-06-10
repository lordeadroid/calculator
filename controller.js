class KeyboardController {
  #calcView;
  #query;
  #display;
  #validNumberKeys;
  #validOperationKeys;
  #validKeyCodes;
  #deleteInput;

  constructor(display, deleteInput) {
    this.#display = display;
    this.#deleteInput = deleteInput;
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
        const result = eval(this.#query);
        this.#query = result;
        this.#calcView.render(result);
      }
    };
  }

  start() {
    this.#onKeyDown();
  }
}

class MouseController {
  #display;
  #deleteInput;
  #numbers;
  #deleteKey;

  constructor(display, deleteInput, numbers, deleteKey) {
    this.#display = display;
    this.#deleteInput = deleteInput;
    this.#numbers = Array.from(numbers);
    this.#deleteKey = deleteKey;
  }

  #onClick() {
    this.#numbers.forEach((element) => {
      element.onclick = (event) => {
        const input = event.target.innerText;
        this.#display(input);
      };
    });

    this.#deleteKey.onclick = () => {
      this.#deleteInput();
    };
  }

  start() {
    this.#onClick();
  }
}

class Controller {
  #view;
  #numberElements;
  #deleteKey;

  #input;
  #mouseController;
  #keyboardController;

  constructor(view, numberElements, deleteKey) {
    this.#view = view;
    this.#numberElements = numberElements;
    this.#deleteKey = deleteKey;

    this.#input = "";
  }

  #render() {
    this.#view.render(this.#input);
  }

  #deleteInput() {
    const newInput = this.#input.slice(0, -1);
    this.#input = newInput;
    this.#render();
  }

  #display(newInput) {
    this.#input += newInput;
    this.#render();
  }

  start() {
    this.#mouseController = new MouseController(
      (input) => this.#display(input),
      () => this.#deleteInput(),
      this.#numberElements,
      this.#deleteKey
    );
    this.#keyboardController = new KeyboardController(
      (input) => this.#display(input),
      () => this.#deleteInput()
    );

    this.#mouseController.start();
    this.#keyboardController.start();
  }
}
