// =====================
// Linear Search
// =====================

// HOW DO WE SEARCH?
// Given an array , the simplest way to search for a value is to look at every element in the array and check if it's the value we want

// JavaScript has methods that are linear searches
// indexOf(number), includes (true/false), find, findIndex

// ====================================
// Example 1
// Write a function called linearSearch.
// This function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1
// ====================================

// ===================================
// Solution
// ===================================

// Write a function called search.
// This function accepts an array and a value
function linearSearch(arr, val) {
  // Loop through the array and check if the current array element is equal to the value
  for (let i = 0; i < arr.length; i++) {
    // If it is, return the index at which the element is found
    if (arr[i] === val) {
      return i;
    }
  }
  // If the value is never found, return -1
  return -1;
}

// TIME COMPLEXITY = O(N)
// SPACE COMPLEXITY = 0(1)

console.log(linearSearch([1, 2, 3, 4, 5, 6], 4));
