class KeyboardController {
  #calcView;
  #query;
  #validNumberKeys;
  #validOperationKeys;
  #validKeyCodes;

  constructor(calcView) {
    this.#calcView = calcView;
    this.#query = "";
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
        const newQuery = this.#query + key;
        this.#query = newQuery;
        this.#calcView.render(this.#query);
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

  constructor(view, numbers) {
    this.#view = view;
    this.#numbers = Array.from(numbers);
    this.#query = "";
  }

  #onClick() {
    this.#numbers.forEach((element) => {
      element.onclick = (event) => {
        const value = event.target.innerText;
        this.#query += value;
        this.#view.render(this.#query);
      };
    });
  }

  start() {
    this.#onClick();
  }
}
