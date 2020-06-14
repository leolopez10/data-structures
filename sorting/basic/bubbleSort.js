// =====================
// Bubble Sort
// =====================

// A sorting algorithm where the largest values bubble up to the top

// First we must SWAP
// function swap(arr, idx1, indx2) {
//   var temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// or

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// ====================================
// Bubble sort Pseudocode
// Start looping from the end of an array to the beginning with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is greater than arr[j + 1], swap those two values
// return sorted array
// ====================================

const array = [37, 45, 29, 8, 23, 15, 2];

// ===================================
// Naive solution
// ===================================
function bubbleSort1(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      // Swap
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
}

console.log(bubbleSort1(array), '========================');

// ===================================
// Refactored solution
// ===================================
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort(array));

// TIME COMPLEXITY O(n)
// Method is good candidate if the data is slightly sorted
