Array.prototype.myFilter = function (callback, context) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr;
};

Array.prototype.myForeach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myMap = function (callback) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    let newMappedItem = callback(this[i], i, this);
    arr.push(newMappedItem);
  }

  return arr;
};

Array.prototype.myReduce = function (callback, initialValue) {
  for (let i = 0; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this);
  }

  return initialValue;
};

function createDebounceFunction(callback, time) {
  let interval;

  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;
      callback(...args);
    }, time);
  };
}
