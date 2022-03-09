const NUM1 = prompt('Введите число');
const NUM2 = prompt('Введите второе число');
const NUMBERS_ARE_VALID = !isNaN(Number(NUM1)) && NUM1 !== '' && Number(NUM2) <= 36 && Number(NUM2) >= 2;
if(NUMBERS_ARE_VALID) {
  const RES = Number(NUM1).toString(Number(NUM2));
  console.log(Number(RES));
} else {
  console.log('Некорректный ввод!');
}
