class Stack {
  #lastElement = null;
  #container;
  #size;

  constructor(maxSize = 10) {
    const isFalseNumber =
      isNaN(maxSize) || typeof maxSize !== 'number' || !isFinite(maxSize);

    if (isFalseNumber) {
      throw new Error('Error');
    }

    this.maxSize = maxSize;
    this.#container = {};
    this.#size = 0;
  }

  isEmpty() {
    return this.#size === 0;
  }

  isFull() {
    return this.#size >= this.maxSize;
  }

  set setLastElement(value) {
    this.#lastElement = value;
  }

  push(element) {
    if (this.isFull()) {
      throw new Error('Error');
    }

    let size = this.#size;

    this.#container[size] = element;
    this.setLastElement = element;
    this.#size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Error');
    }

    let size = --this.#size;

    this.setLastElement = this.#container[size - 1];
    let deletedData = this.#container[size];

    delete this.#container[size];
    return deletedData;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.#lastElement;
    }
  }

  toArray() {
    return [Object.values(this.#container)];
  }

  static fromIterable(iterable) {
    if (Array.isArray(Array.from(iterable))) {
      const newStack = new Stack(Array.from(iterable).length);

      Array.from(iterable).forEach(el => newStack.push(el));
      return newStack;
    } else {
      throw new Error('Error');
    }
  }
}
