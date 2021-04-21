"use strict";
function getResult(a, b, c) {
  // код для задачи №1 писать здесь
  let diskriminant = b * b - 4 * a * c;
  let x = [];
  if (diskriminant > 0) {
    let firstX = ((-b + Math.sqrt(diskriminant)) / 2) * a;
    let secondX = ((-b - Math.sqrt(diskriminant)) / 2) * a;
    x = [firstX, secondX];
  } else if (diskriminant === 0) {
    let firstX = (-b / 2) * a;
    x = [firstX];
  }
  return x;
}

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  let averageMark = 0;
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (marks.length > 5) {
    console.log("Введено слишком много оценок, будет посчитано первые 5");
    let sliceArray = marks.slice(0, 5);
    let sum = sliceArray.reduce(reducer);
    averageMark = sum / sliceArray.length;
  } else if (marks.length == 0) {
    return 0;
  } else {
    let sum = marks.reduce(reducer);
    averageMark = sum / marks.length;
  }
  return averageMark;
}

// return averageMark;

function askDrink(name, dateOfBirthday) {
  // код для задачи №3 писать здесь
  let result = "";
  if (new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
  }
  return result;
  // return result;
}
