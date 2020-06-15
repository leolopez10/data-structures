// =====================
// Merge Sort
// =====================

// It's a combination of two things - merging and sorting!
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

const array = [10, 24, 76, 74, 72, 1, 9, 12, 34, 89, 75, 45];
// ===========================================
// Pseudocode for merging two sorted arrays
// Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array
// =============================================

// Merge sorted Arrays
const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};

// ===================================
// solution for mergeSort
// ===================================
function mergeSort(arr) {
  // return array if it only has one element
  if (arr.length <= 1) return arr;
  // Find the mid point of an array
  let mid = Math.floor(arr.length / 2);
  // Get the left side of the array using the mid point
  let left = mergeSort(arr.slice(0, mid));
  // Get the right side of the array using the mid point
  let right = mergeSort(arr.slice(mid));
  // Merge the left and right side of the sorted arrays
  return merge(left, right);
}

console.log(mergeSort(array));

// TIME COMPLEXITY - O(n log(n))
// SPACE COMPLEXITY - O(n)
