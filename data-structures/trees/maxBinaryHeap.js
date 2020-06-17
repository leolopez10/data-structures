// ======================================================================
// Binary Heap Tree
// ======================================================================

// - Binary heaps are used to implement Priority Queues, which are VERY commonly used data structures
// - They are also used quite a bit, with GRAPH TRAVERSAL algorithms

// - MAX heap
//     - Very similar to binary search tree, but with some different rules (no order to the tree)
//     - In a MaxBinaryHeap, parent nodes are always larger than child nodes.
//     - Each parent has at most two child nodes
//     - The value of each parent node is ALWAYS greater than its child nodes
//     - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.
// - MIN heap
//     - In a MinBinaryHeap, parent nodes are always smaller than child nodes

// ======================================================================
// BIG O
// Insertion - O(logN)
// Removal - O(logN)
// Search - O(N)
// ======================================================================

// ======================================================================
// Code
// ======================================================================
class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12, 55];
  }

  // INSERT - add node to the list
  // Push the value into the values property on the heap
  // Bubble the value up to its correct spot
  // BUBBLE UP HELPER
  // Create a variable called index which is the length of the values property - 1
  // Create a variable called parentIndex which is the floor of (index - 1)/2
  // Keep looping as long as the value element at the parentIndex is less than the values element at the child index
  //  - Swap the value of the values element at the parentIndex with the value of the element property at the child index
  //  - Set the index to be the parentIndex, and start over!
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // REMOVING (EXTRACTMAX)
  // Swap the first value in the values property with the last one
  // Pop from the values property, so you can return the value at teh end
  // Have the new root "sink down" to the correct spot...
  //  - Your parent index start at 0 (the root)
  //  - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  //  - Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
  //  - If the left or right child is greater than the element ... Swap. If both left and right children are larger, swap with the largest child
  //  - The child index you swapped to now becomes the new parent index
  //  - Keep looping and swapping until neither child is larger than the element
  //  - Return the old root
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      //trickle down
      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(13);
heap.insert(100);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);
