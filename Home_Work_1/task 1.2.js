function showResult(firstNumber, secondNumber) {
  const RES1 = Number(firstNumber) + Number(secondNumber);
  const RES2 = Number(firstNumber) / Number(secondNumber);

  console.log(`Ответ: ${RES1}, ${RES2}.`);
}

const NUM1 = prompt('Введите число');
const NUM1_IS_VALID = !isNaN(Number(NUM1)) && NUM1 !== '' && Number(NUM1) !== Infinity;

if (!NUM1_IS_VALID) {
  console.log('Некорректный ввод!');
} else {
  const NUM2 = prompt('Введите второе число');
  const NUM2_IS_VALID = Number(NUM2) && Number(NUM2) !== Infinity;

  !NUM2_IS_VALID ? console.log('Некорректный ввод!') : showResult(NUM1, NUM2);
}
