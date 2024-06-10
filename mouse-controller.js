class MouseController {
  #display;
  #deleteInput;
  #numbers;
  #deleteKey;
  #evaluate;
  #enterKey;
  #clearKey;
  #clearScreen;
  #operators;

  constructor(elements, display, deleteInput, evaluate, clearScreen) {
    this.#numbers = Array.from(elements.numbers);
    this.#deleteKey = elements.deleteKey;
    this.#enterKey = elements.enterKey;
    this.#clearKey = elements.clearKey;
    this.#operators = elements.operators;
    this.#display = display;
    this.#deleteInput = deleteInput;
    this.#evaluate = evaluate;
    this.#clearScreen = clearScreen;
  }

  #onClick() {
    this.#numbers.forEach((element) => {
      element.onclick = (event) => {
        const input = event.target.innerText;
        this.#display(input);
      };
    });

    this.#operators.forEach((element) => {
      element.onclick = (event) => {
        const input = event.target.innerText;
        this.#display(input);
      };
    });

    this.#deleteKey.onclick = () => {
      this.#deleteInput();
    };

    this.#clearKey.onclick = () => {
      this.#clearScreen();
    };

    this.#enterKey.onclick = () => {
      this.#evaluate();
    };
  }

  start() {
    this.#onClick();
  }
}
