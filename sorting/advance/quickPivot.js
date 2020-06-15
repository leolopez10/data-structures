// =============================
// Pivot Helper
// =============================

// In order to implement merge sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot
// Given an array, this helper function should designate an element as a the pivot
// It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
// The order of elements on either side of the pivot doesn't matter!
// The helper should do this IN PLACE, that is, it should not create a new array
// When complete, the helper should return the index of the pivot

//===================================================
// Picking a pivot
// The runtime of quick sort depends in part on how one selects the pivot
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
// For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)
//===================================================

// =============================================================
// Pseudocode for picking a pivot point
// Write a function called pivot or partition
// It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1 respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index
// Return the pivot index
// ==============================================================

const array = [10, 24, 76, 74, 72, 1, 9, 12, 34, 89, 75, 45];

// ===================================
// Solution
// ===================================
// First Version
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot(array)); // should return 2
