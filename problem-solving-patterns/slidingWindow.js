// =====================
// Sliding Window
// =====================

// This patter involves creating a WINDOW which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

// ====================================
// Example 1
// Write a function called MAXSUBARRAYSUM which accepts an array of integers and a number called N. the function should calculate the maximum sum of N consecutive elements in the array.
// ====================================

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) = 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) = 17
// maxSubarraySum([4, 2, 1, 6], 1) = 6
// maxSubarraySum([4, 2, 1, 6, 2], 4) = 13
// maxSubarraySum([], 4) = null

// ===================================
// Naive solution
// ===================================
function maxSubarraySum1(arr, num) {
  // make sure num is greater than the array length
  if (num > arr.length) {
    return null;
  }
  // made max -infinity because we could have an array of all negative numbers. Doesn't make sense to start at 0
  var max = -Infinity;
  // loop through array, but stop at num elements at the end. So we take the array length subtract num from it so it ends accordingly then add 1 because arrays start at 0
  for (let i = 0; i < arr.length - num + 1; i++) {
    // temp stores our sum each time through
    temp = 0;
    for (let j = 0; j < num; j++) {
      // second loop is adding consecutive digits up to num, and adding i for the last digit
      temp += arr[i + j];
    }
    // update max if temp is greater than max
    if (temp > max) {
      max = temp;
    }
    // console.log(temp, max);
  }
  return max;
}

// TIME COMPLEXITY - O(N^2)

console.log(maxSubarraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
// =======================================
// Refactored solution
// =======================================
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // subtract first element and add new end element hence sliding window.
    tempSum = tempSum - arr[i - num] + arr[i];
    // take the bigger number between tempsum and maxsum
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// TIME COMPLEXITY - O(N)

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
