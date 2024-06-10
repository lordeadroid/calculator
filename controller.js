class Controller {
  #view;
  #elements;

  #input;
  #result;
  #mouseController;
  #keyboardController;

  constructor(view, elements) {
    this.#view = view;
    this.#elements = elements;

    this.#input = "";
  }

  #render() {
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
      this.#renderError("Wrong Input");
    }
  }

  #deleteInput() {
    const newInput = this.#input.slice(0, -1);
    this.#input = newInput;
    this.#render();
  }

  #clearInput() {
    this.#input = "";
    this.#render();
  }

  #display(newInput) {
    this.#input += newInput;
    this.#render();
  }

  start() {
    this.#mouseController = new MouseController(
      this.#elements,
      (input) => this.#display(input),
      () => this.#deleteInput(),
      () => this.#evaluate(),
      () => this.#clearInput()
    );

    this.#keyboardController = new KeyboardController(
      (input) => this.#display(input),
      () => this.#deleteInput(),
      () => this.#evaluate()
    );

    this.#mouseController.start();
    this.#keyboardController.start();
    this.#render();
  }
}
