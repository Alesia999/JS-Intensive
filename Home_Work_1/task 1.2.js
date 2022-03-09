const NUM1 = prompt('Введите число');
if (isNaN(Number(NUM1)) || NUM1 === '') {
  console.log('Некорректный ввод!');
} else {
  const NUM2 = prompt('Введите второе число');
  if(!Number(NUM2)) {
    console.log('Некорректный ввод!');
  } else {
    const RES1 = Number(NUM1) + Number(NUM2);
    const RES2 = Number(NUM1) / Number(NUM2);
    console.log(`Ответ: ${RES1}, ${RES2}.`);
  }
}
