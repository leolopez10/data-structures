// ======================================================================
// Queues
// ======================================================================

// First In First Out (FIFO)
// Waiting in Line at a theme park
// Entering a game online
// Background Tasks
// Uploading Resources
// Printing/Task processing
// can use and array or linked list to have queues

// ======================================================================
// BIG O
// Insertion = O(1)
// Removal = O(1)
// Searching = O(n)
// Access = O(n)
//
// ======================================================================

// ======================================================================
// Code
// ======================================================================
// Singly linked Stack w/ enqueue (adding to the end like push) and dequeue removing from the beginning (like shift) working from the left side of the list.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
