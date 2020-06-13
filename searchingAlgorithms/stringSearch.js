// =====================
// String Search
// =====================

// Suppose you want to count the number of times a smaller string appears in a longer string
// A straightforward approach involves checking pairs of characters individually

// ====================================
// Example 1
// Define a function that takes in two strings
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match keep going
// If you complete the inner loop and find a match, increment the count of matches
// return the count
// ====================================

// ===================================
// Naive solution
// ===================================
function naiveSearch(string, pattern) {
  let count = 0;
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < pattern.length; j++) {
      console.log(string[i + j], pattern[j]);
      if (pattern[j] !== string[[i + j]]) {
        console.log('break');
        break;
      }
      if (j === pattern.length - 1) {
        console.log('found one');
        count++;
      }
    }
  }
  return count;
}
console.log(naiveSearch('lorie loled', 'lo'));

// TIME COMPLEXITY IS O(n);

// =======================================
// Refactored solution KMP search
// =======================================
