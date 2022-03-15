function concatStrings(value, separator) {
  const container = [value];

  const argSupplier = (val) => {
    if (typeof val === 'string' || val instanceof String) {
      container.push(val);
      return argSupplier;
    } else {
      return container.join(separator ? separator : '');
    }
  };

  return argSupplier;
}

class Calculator {
  constructor(number1, number2) {
    const numbersAreValid =
      this.checkNumberValidity(number1) && this.checkNumberValidity(number2);

    if (!numbersAreValid) throw new Error('Ошибка');
    this.number1 = number1;
    this.number2 = number2;
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.checkNumberValidity = this.checkNumberValidity.bind(this);
  }

  checkNumberValidity(number) {
    return (
      !isNaN(Number(number)) && isFinite(number) && typeof number === 'number'
    );
  }

  setX(num) {
    if (this.checkNumberValidity(num)) {
      this.number1 = num;
    } else throw new Error('Ошибка');
  }

  setY(num) {
    if (this.checkNumberValidity(num)) {
      this.number2 = num;
    } else throw new Error('Ошибка');
  }

  logSum() {
    console.log(this.number1 + this.number2);
  }

  logMul() {
    console.log(this.number1 * this.number2);
  }

  logSub() {
    console.log(this.number1 - this.number2);
  }

  logDiv() {
    if (this.number2) {
      console.log(this.number1 / this.number2);
    } else throw new Error('Ошибка');
  }
}
