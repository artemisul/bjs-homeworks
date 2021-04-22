"user strict";

//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function () {
  let stringPalindrome = this.toLowerCase();
  let lengthOfPalindrome = Math.round(stringPalindrome.length / 2);
  for (let i = 0; i < lengthOfPalindrome; i++) {
    if (stringPalindrome[i] === stringPalindrome[stringPalindrome.length - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
};

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let averageMark = Math.round(sum / marks.length);
    return averageMark
}

function checkBirthday(birthday) {
  let now = Date.now();
  birthday = new Date(birthday);
  let diff = now - birthday;
  let age = Math.trunc(diff / (365.25 * 24 * 60 * 60 * 1000));
  console.log(age);
  let verdict;
  if (age >= 18) {
      verdict = true;
  } else {
      verdict = false;
  }
  return verdict
}
