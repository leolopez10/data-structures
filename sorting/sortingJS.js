function numberCompare(num1, num2) {
  return num1 - num2; // this how we get numbers to be in chronological order
  //   return num2 - num1; // This is to reverse the sort
}

const numbers = [6, 4, 8, 10, 12, 1, 28, 43, 16];

function compareByLength(str1, str2) {
  return str2.length - str1.length;
}

const strings = ['Leo', 'Lopez', 'Anya', 'Andy', 'Euan', 'Eilidh'];

console.log(numbers.sort(numberCompare));
console.log(strings.sort(compareByLength));
console.log(strings.sort()); // alphabetize
