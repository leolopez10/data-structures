function factorialNonRecursive(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

console.log(factorialNonRecursive(5));

// Recursive way

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));

// =================================
// common errors
// =================================

// No base Case
function factorial1(num) {
  // Base Case missing
  return num * factorial1(num - 1);
}

// Forgetting to return
function factorial2(num) {
  // no return on basecase
  if (num === 1) console.log(1);
  return num * factorial2(num - 1);
}
// Returning the wrong thing
function factorial3(num) {
  if (num === 1) return 1;
  // return the same thing over and over
  return num * factorial3(num);
}
