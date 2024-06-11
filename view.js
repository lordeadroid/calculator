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

  #removeResultStyle() {
    setTimeout(() => {
      this.#result.style = "";
    }, 1000);
  }

  #addStyleToResult() {
    this.#result.style.position = "relative";
    this.#result.style.top = "-2rem";
    this.#result.style.transform = "translate(0, 2rem)";
    this.#result.style.transition = "all 1000ms ease";
  }

  render(result) {
    this.#result.innerText = result;
    this.#addStyleToResult();
    this.#removeResultStyle();
  }
}
