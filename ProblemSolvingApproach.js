// Write a function which takes in a string and returns counts of each character in the string

function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters
}

function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
  // if the char is a number/letter AND is a key in object, add one to count
  // if the char is a number/letter AND not in object, add it to object and set value to 1
  // if char is something else (space, period, etc.) don't do anything
  // return an object at end
}

function charCount(str) {
  // make object to return at end
  let obj = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      // if the char is a number/letter AND is a key in object, add one to count
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        obj[char] = 1;
      }
    }
  }
  // if char is something else (space, period, etc.) don't do anything
  return obj;
  // return an object at end
}
console.log(charCount('Leo Lopez'));
