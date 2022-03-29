let display = document.querySelector('.display');
let numbersEl = document.querySelectorAll('.number');
let operationEl = document.querySelectorAll('.operation');
let equalEl = document.querySelector('.equal');
let clearAllEl = document.querySelector('.all-clear');
let lastElClear = document.querySelector('.last-el-clear');
let plusMinus = document.querySelector('.plus-minus');
let square = document.querySelector('.square');
let exponentiation = document.querySelector('.exponentiation ');
let currentResult = '';
let result = 0;
let haveDot = false;
let lastOperation = '';
let num1 = '';
let num2 = '';

clearAllEl.addEventListener('click', () => {
  num1 = '';
  num2 = '';
  display.innerText = '0';
  result = 0;
  haveDot = false;
});

lastElClear.addEventListener('click', () => {
  if (result) {
    result = String(result).slice(0, -1);
    display.innerHTML = result;
    num1 = result;
  } else if (num2) {
    num2 = String(num2).slice(0, -1);
    display.innerHTML = num2;
  } else {
    num1 = String(num1).slice(0, -1);
    display.innerHTML = num1;
  }
});

numbersEl.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot) {
      return;
    }

    displayInfo(e);
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener('click', (e) => {
    haveDot = false;
    const operationName = e.target.innerText;

    checkResult();
    lastOperation = operationName;
  });
});

square.addEventListener('click', () => {
  if (!num1) return;
  haveDot = false;
  result = Math.sqrt(parseFloat(num1)).toFixed(3);

  if (isNaN(result)) {
    display.innerText = 'Error';
    num1 = '';
  } else {
    num1 = result;
    display.innerText = result;
  }
});

equalEl.addEventListener('click', () => {
  if (!num1 || !num2) return;

  haveDot = false;
  calculate();
  lastOperation = '';
  num2 = '';

  if (!isFinite(result)) {
    display.innerText = 'Error';
    num1 = '';
    result = 0;
  } else {
    display.innerText = result;
    num1 = result;
  }
});

plusMinus.addEventListener('click', () => {
  if (num1 && !num2) {
    num1 *= -1;
    display.innerText = num1;
  } else if (num1 && num2) {
    num2 *= -1;
    display.innerText = num2;
  }
});

function calculate() {
  if (lastOperation === 'x') {
    result = parseFloat(result) * parseFloat(num2);
  } else if (lastOperation === '+') {
    result = parseFloat(result) + parseFloat(num2);
  } else if (lastOperation === '-') {
    result = parseFloat(result) - parseFloat(num2);
  } else if (lastOperation === '÷') {
    result = parseFloat(result) / parseFloat(num2);
  } else if (lastOperation === '^') {
    result = (parseFloat(result) ** parseFloat(num2)).toFixed(3);
  }
}

function displayInfo(e) {
  if (String(num1) && lastOperation) {
    num2 += e.target.innerText;
    display.innerText = num2;
  } else {
    num1 += e.target.innerText;
    display.innerText = num1;
  }
}

function checkResult() {
  if (String(num1) && String(num2) && lastOperation) {
    calculate();
    display.innerText = result;
    num2 = '';
    num1 = result === 0 ? '' : result;
  } else if (num1 === '' && num2 === '' && result === 0) {
    num1 = 0;
  } else {
    result = parseFloat(num1);
  }
}
