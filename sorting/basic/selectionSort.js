// =====================
// Selection Sort
// =====================

// Similar to bubble sort, but instead of first placing large values into sorted, it places the small values into sorted position

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

// ===============================================
// Selection Sort Pseudocode
// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number if found, designate that smaller number to be the new "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted

const array = [37, 45, 29, 8, 23, 15, 2];
// ===================================
// Naive solution
// ===================================
function selectionSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log(i, j);
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // Swap
    if (i !== lowest) {
      console.log('========================');
      console.log(arr);
      console.log('SWAPPING TO: ');
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      console.log(arr);
      console.log('========================');
    }
  }
  return arr;
}

console.log(selectionSort1(array));
// =======================================
// Refactored solution
// =======================================
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // Swap
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort(array));

// TIME COMPLEXITY O(n^2)
// SPACE COMPLEXITY O(1)
