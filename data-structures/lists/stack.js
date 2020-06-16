// ======================================================================
// Stacks
// ======================================================================

// A Last In First Out (LIFO) data structure
// The last element added to the stack will be the first element removed from the stack
// Manage function invocations
// Undo / Redo
// Routing (the history object) is treated like a stack
// Not built in data structure in JavaScript, but are relatively simple to implement

// ======================================================================
// BIG O
// Insertion = O(1)
// Removal = O(1)
// Searching = O(n)
// Access = O(n)
// ======================================================================

// ======================================================================
// Code
// ======================================================================
// Singly linked Stack w/ push and pop working from the left side of the list. So we don't have to loop all the way to the end of the list to remove something.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
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
