class MouseController {
  #display;
  #deleteInput;
  #numbers;
  #deleteKey;
  #evaluate;
  #enterKey;

  constructor(elements, display, deleteInput, evaluate) {
    this.#numbers = Array.from(elements.numbers);
    this.#deleteKey = elements.deleteKey;
    this.#enterKey = elements.enterKey;
    this.#display = display;
    this.#deleteInput = deleteInput;
    this.#evaluate = evaluate;
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

    this.#enterKey.onclick = () => {
      this.#evaluate();
    };
  }

  start() {
    this.#onClick();
  }
}
