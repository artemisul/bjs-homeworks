"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь

  if (isNaN(percent) === true) {
    console.log(`Параметр "Процентная ставка" содержит неправильное значение ${percent}`);
  } 
  if (isNaN(contribution) === true) {
    console.log(`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`);
  }
  if (isNaN(amount) === true) {
    console.log(`Параметр "Общая стоимость" содержит неправильное значение ${amount}`);
  } 
  percent = Number.parseInt(percent);
  contribution = Number.parseInt(contribution);
  amount = Number.parseInt(amount);

  let loanRest = amount - contribution;
  let quantityMonths = date.getMonth() - new Date().getMonth() + 12 * (date.getFullYear() - new Date().getFullYear());
  let monthPercent = percent / 100 / 12;
  let totalAmount = loanRest * (monthPercent + monthPercent / (Math.pow(1 + monthPercent, quantityMonths) - 1));
  return +(totalAmount * quantityMonths).toFixed(2);
  // return totalAmount;
}

function getGreeting(name) {
  // код для задачи №2 писать здесь
  let greeting = `Привет, мир! Меня зовут ${(name === '' || name === null || name === undefined) ?  'Аноним' : name}`;
  return greeting;
}
