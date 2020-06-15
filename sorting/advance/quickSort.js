// =====================
// Quick Sort
// =====================

// Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
// Works by selecting one element (called the "pivot") and finding the index where the pivot should end up
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// ====================================
// Pseudocode
// Call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
// Your base case occurs when you consider a subarray with less than 2 elements
// ====================================

// Array
const array = [10, 24, 76, 74, 72, 1, 9, 12, 34, 89, 75, 45];

// Pivot function
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

// ===================================
// QuickSort Solution
// ===================================
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // should equal 2 (10 belongs at index 2)
    // Left side
    quickSort(arr, left, pivotIndex - 1);
    // Right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort(array));
