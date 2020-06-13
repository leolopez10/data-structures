// =====================
// Binary Search
// =====================

// Binary search is a much faster form of search
// Rather than eliminating one element at a time, you can eliminate half of he remaining elements at a time
// Binary search only works on SORTED arrays
// Divide and conquer search. Go the the middle, then take the left or right chunk, and then repeat until the searched element is done.

// ====================================
// Example 1
// Write a function called binarySearch.
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
// * create a pointer in the middle
// * If you find the value you want, return the index
// * If the value is too small, move the left pointer up
// * If the value is too large, move the right pointer down
// if you never find the value, return -1
// ====================================

// ===================================
// My Solution
// ===================================
// function binarySearch(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((right + left) / 2);
//   while (left <= right) {
//     let currentElement = arr[middle];
//     if (currentElement < val) {
//       left = middle + 1;
//     } else if (currentElement > val) {
//       right = middle - 1;
//     } else {
//       return middle;
//     }
//   }
//   return -1;
// }

// TIME COMPLEXITY - O(logN)

// console.log(
//   binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 4)
// );

// =======================================
// Original Solution
// ======================================
// function binarySearch(arr, val) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== val && start <= end) {
//     if (val < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if (arr[middle] === val) {
//     return middle;
//   }
//   return -1;
// }

// ========================================
//  My Refactored Solution
// =======================================
function binarySearch(arr, val) {
  // create a starting point (left side of sorted array)
  var start = 0;
  // create an end point (right side of sorted array)
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    val < arr[middle] ? (end = middle - 1) : (start = middle + 1);
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 13)
);
