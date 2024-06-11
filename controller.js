class Controller {
  #view;
  #elements;

  #input;
  #result;
  #MouseController;
  #KeyboardController;

  constructor(MouseController, KeyboardController, view, elements) {
    this.#MouseController = MouseController;
    this.#KeyboardController = KeyboardController;
    this.#view = view;
    this.#elements = elements;

    this.#input = "";
  }

  #renderInput() {
    this.#view.renderInput(this.#input);
  }

  #renderResult() {
    this.#view.render(this.#result);
  }

  #renderError(message) {
    this.#view.render(message);
  }

  #evaluate() {
    try {
      const result = eval(this.#input);
      this.#result = result;
      this.#renderResult();
    } catch (error) {
      this.#renderError("Error Evaluting Expression");
    }
  }

  #deleteInput() {
    const newInput = this.#input.slice(0, -1);
    this.#input = newInput;
    this.#result = "";
    this.#renderInput();
    this.#renderResult();
  }

  #clearScreen() {
    this.#input = "";
    this.#result = "";
    this.#renderInput();
    this.#renderResult();
  }

  #display(newInput) {
    this.#input += newInput;
    this.#renderInput();
  }

  start() {
    const mouseController = new this.#MouseController(
      this.#elements,
      (input) => this.#display(input),
      () => this.#deleteInput(),
      () => this.#evaluate(),
      () => this.#clearScreen()
    );

    const keyboardController = new this.#KeyboardController(
      (input) => this.#display(input),
      () => this.#deleteInput(),
      () => this.#evaluate(),
      () => this.#clearScreen()
    );

    mouseController.start();
    keyboardController.start();
  }
}
