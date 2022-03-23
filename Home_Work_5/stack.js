class Stack {
  #lastElement = null;
  #size;

  constructor(maxSize = 10) {
    const isFalseNumber =
      isNaN(maxSize) || typeof maxSize !== 'number' || !isFinite(maxSize);

    if (isFalseNumber) {
      throw new Error('Error');
    }

    this.maxSize = maxSize;
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

    let prevEl = this.#lastElement;
    let data = { prevEl, element };

    this.setLastElement = data;
    this.#size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Error');
    }

    let node = this.#lastElement;

    this.#size -= 1;
    this.#lastElement = node.prevEl;

    return node.element;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.#lastElement.element;
  }

  toArray() {
    let newArr = [];
    let data = this.#lastElement;

    while (data) {
      newArr.push(data.element);
      data = data.prevEl;
    }

    return newArr.reverse();
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Error');
    }

    const newArray = Array.from(iterable);
    const newStack = new Stack(newArray.length);

    newArray.forEach((el) => newStack.push(el));
    return newStack;
  }
}
