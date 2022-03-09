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
  const ARRAY_IS_VALID = Array.isArray(arr) && arr.every((number) => Number(number) === number);
  const INTERVAL_IS_VALID = !isNaN(num1) && !isNaN(num2) && typeof num1 === 'number' && typeof num2 === 'number';
  if (ARRAY_IS_VALID && INTERVAL_IS_VALID) {
    if (num1 > num2) {
      let newNum = num1;
      num1 = num2;
      num2 = newNum;
    }
    return arr.filter((element) => element <= num2 && element >= num1);
  } else {
    throw new Error('Ошибка!');
  }
}
const MY_ITERABLE = { from: 1, to: 4 };
function makeObjectIterable(notIterableObject) {
  const [VALUE1, VALUE2] = Object.values(notIterableObject);
  if (VALUE1 && VALUE2 && typeof VALUE1 === 'number' && typeof VALUE2 === 'number' && VALUE1 < VALUE2) {
    for (let i = VALUE1; i <= VALUE2; i++) {
      console.log(i);
    }
  } else {
    throw new Error('Ошибка');
  }
}
makeObjectIterable(MY_ITERABLE);

const MY_ITERABLE2 = { from: 1, to: 8, [Symbol.iterator]() {
  this.current = this.from;
  return this;
},
next() {
  if (this.current <= this.to) {
    return { done: false, value: this.current++ };
  } else {
    return { done: true };
  }
},
};
for (let num of MY_ITERABLE2) {
  console.log(num);
}
