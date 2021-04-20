"use strict";
function getResult(a, b, c) {
  // код для задачи №1 писать здесь
  let diskriminant = b * b - 4 * a * c;

  if (diskriminant > 0) {
    let firstX = ((-b + Math.sqrt(diskriminant)) / 2) * a;
    let secondX = ((-b - Math.sqrt(diskriminant)) / 2) * a;
    let x = [firstX, secondX];
    return x;
  } else if (diskriminant < 0) {
    let x = [];
    return x;
  } else {
    let firstX = (-b / 2) * a;
    let x = [firstX];
    return x;
  }
}

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  let averageMark = 0;
  let sum = (array) => {
    sum = 0;
    array.forEach(function (value) {
    sum += value;
    });
    return sum;
  };
  if (marks.length == 0) {
    return 0;
  } else if (marks.length <= 5) {
    averageMark = sum(marks) / marks.length;
  } else {
    console.log("Введено слишком много оценок, будет посчитано первые 5");
    let sliceArray = marks.slice(0, 5);
    averageMark = sum(sliceArray) / sliceArray.length;
  }

  return averageMark;
}

// return averageMark;

function askDrink(name, dateOfBirthday) {
  // код для задачи №3 писать здесь
  // return result;
}
