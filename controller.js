class KeyboardController {
  #calcView;
  #query;
  #display;
  #validNumberKeys;
  #validOperationKeys;
  #validKeyCodes;

  constructor(display) {
    this.#display = display;
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
        const newQuery = this.#query.slice(0, -1);
        this.#query = newQuery;
        this.#calcView.render(this.#query);
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
  #view;
  #numbers;
  #query;
  #display;

  constructor(display, numbers) {
    this.#display = display;
    this.#numbers = Array.from(numbers);
  }

  #onClick() {
    this.#numbers.forEach((element) => {
      element.onclick = (event) => {
        const input = event.target.innerText;
        this.#display(input);
      };
    });
  }

  start() {
    this.#onClick();
  }
}

class Controller {
  #view;
  #numberElements;

  #input;
  #mouseController;
  #keyboardController;

  constructor(view, numberElements) {
    this.#numberElements = numberElements;
    this.#view = view;

    this.#input = "";
  }

  #display(newInput) {
    this.#input += newInput;
    this.#view.render(this.#input);
  }

  start() {
    this.#mouseController = new MouseController(
      (input) => this.#display(input),
      this.#numberElements
    );
    this.#keyboardController = new KeyboardController((input) =>
      this.#display(input)
    );

    this.#mouseController.start();
    this.#keyboardController.start();
  }
}
