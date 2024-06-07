class View {
  #screen;

  constructor(screen) {
    this.#screen = screen;
  }

  render(query) {
    this.#screen.innerText = query;
  }
}
