class Controller {
  #view;
  #elements;

  #input;
  #mouseController;
  #keyboardController;

  constructor(view, elements) {
    this.#view = view;
    this.#elements = elements;

    this.#input = "";
  }

  #render() {
    this.#view.render(this.#input);
  }

  #evaluate() {
    const result = eval(this.#input);
    this.#input = result;
    this.#render();
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
      this.#elements,
      (input) => this.#display(input),
      () => this.#deleteInput(),
      () => this.#evaluate()
    );

    this.#keyboardController = new KeyboardController(
      (input) => this.#display(input),
      () => this.#deleteInput(),
      () => this.#evaluate()
    );

    this.#mouseController.start();
    this.#keyboardController.start();
  }
}
