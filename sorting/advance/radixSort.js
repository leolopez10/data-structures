// =====================
// Radix Sort
// =====================

// Radix sort is a special sorting algorithm that works on lists of numbers
// It never makes comparisons between elements
// It exploits the fact that information about the size of a number is encoded in the number of digits
// More digits means a bigger number!

// ====================================
// Pseudocode
// Define a function that accepts list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to this largest number of digits
// For each iteration of the loop:
// Create buckets for each digit (0-9)
// Place each number in the corresponding bucket based on its Kth digit
// Replace our existing array with values in our buckets, stating with 0 and going up to 9
// return the list at the end
// ====================================

// Array
const array = [
  10323,
  2423,
  7611,
  742,
  72,
  134523,
  944521,
  1233453,
  3432,
  89,
  7,
  452
];

// =====================
// Radix Helpers
// =====================

function getDigit(num, i) {
  // abs is absolute value
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// ===================================
// RadixSort Solution
// ===================================
function radixSort(nums) {
  maxDigitCount = mostDigits(nums);
  //   console.log(maxDigitCount);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    // console.log(nums);
  }
  return nums;
}

console.log(radixSort(array));
// TIME COMPLEXITY - O(nk)
// SPACE COMPLEXITY - O(n + k)
