// =====================
// Insertion Sort
// =====================

// Builds up the sort by gradually creating a larger left half which is always sorted

// ===============================================
// Insertion Sort Pseudocode
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
// Repeat until the array is sorted

const array = [37, 45, 29, 8, 23, 15, 2];
// ===================================
// Naive solution
// ===================================
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort(array));

// TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(1)
// If we keep on side sorted, it works well if you're taking in live data.
