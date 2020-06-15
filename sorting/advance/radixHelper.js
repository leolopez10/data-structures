// =====================
// Radix Helpers
// =====================

// ===============================================================
// In order to implement radix sort, it's helpful to build a few helper functions
// getDigit(num, place) - return the digit in num at the given place value
// getDigit(12345, 3) = 2
// getDigit(12345, 1) = 0
// getDigit(12345, 4) = 3
// ===============================================================
function getDigit(num, i) {
  // abs is absolute value
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(7323, 2));

// ===============================================================
// digitCount(num) - returns the number of digits in num
// digitCount(314) = 3
// digitCount(34) = 2
// digitCount(3) = 1
// ===============================================================
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(7323));

// ===============================================================
// mostDigits([1234, 56, 7]) = 4
// mostDigits([1234, 56, 7, 12345]) = 5
// mostDigits([12, 56, 7]) = 2
// ===============================================================
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(mostDigits([1234, 56, 7, 12345]));
