function makeObjectDeepCopy(object) {
  let newObject = {};

  Object.keys(object).forEach((prop) => {
    newObject[prop] =
      typeof object[prop] !== 'object'
        ? object[prop]
        : makeObjectDeepCopy(object[prop]);
  });

  return newObject;
}

function selectFromInterval(arr, num1, num2) {
  const arrayIsValid =
    Array.isArray(arr) && arr.every((number) => checkNumberValidity(number));
  const intervalIsValid =
    checkNumberValidity(num1) && checkNumberValidity(num2);

  if (arrayIsValid && intervalIsValid) {
    return num1 > num2
      ? arr.filter((element) => element <= num1 && element >= num2)
      : arr.filter((element) => element <= num2 && element >= num1);
  } else {
    throw new Error('Ошибка!');
  }
}

const MY_ITERABLE = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    checkObjectValidity(MY_ITERABLE);
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

function checkObjectValidity(object) {
  const { from, to } = object;
  const intervalIsValid =
    checkNumberValidity(from) && checkNumberValidity(to) && from <= to;

  if (!intervalIsValid) {
    throw new Error('Ошибка');
  }
}

function checkNumberValidity(number) {
  return (
    !isNaN(Number(number)) && isFinite(number) && typeof number === 'number'
  );
}
