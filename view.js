class View {
  #input;
  #result;

  constructor(input, result) {
    this.#input = input;
    this.#result = result;
  }

  renderInput(input) {
    this.#input.innerText = input;
  }

  render(result) {
    this.#result.innerText = result;
  }
}
