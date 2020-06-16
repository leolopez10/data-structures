// ======================================================================
// Doubly Linked List
// ======================================================================

// ALMOST identical to Singly LInked Lists, except every node has ANOTHER pointer, to the previous node
// Browser history is saved like this
// Better than Singly Linked Lists for finding nodes and can be done in half the time
// However, they do take up more memory considering the extra pointer

// ======================================================================
// Comparisons Doubly and Singly link lists
// More memory === more flexibility
// It's almost ways a trade off
// ======================================================================

// ======================================================================
// BIG O
// Insertion = O(1)
// Removal = O(1)
// Searching = O(n) (before factoring O(n/2))
// Access = O(n)
// ======================================================================

// ======================================================================
// Code
// ======================================================================
// Node variable (val, next, previous)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
// Doubly Linked List (head, tail, length)
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // PUSH - adds a node to the end of the list
  // Create a new node with the value passed to the function
  // If the head property is null set the head and tail to be the newly created node
  // If not, set the next property on the tail to be that node
  // Set the previous property on the newly created node to be the tail
  // Set the tail property to be the newly created node
  // Incremented the length
  // Return the Doubly Linked List
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // POP - remove a node from the end of the list
  // If there is no head, return undefined
  // Store the current tail in a variable to return later
  // If the length is 1, set the head and tail to be null
  // Update the tail to be the previous Node.
  // Set the newTail's next to null
  // Decrement the length
  // Return the value removed
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  // SHIFT - Removing a new node from the beginning of the list
  // If length is 0, return undefined
  // Store the current head property in a variable (we'll call it old head)
  // If the length is one
  //// set the head to be null
  //// set the tail to be null
  // Update the head to be the next of the old head
  // Set the head's prev property to null
  // Set the old head's next to null
  // Decrement the length
  // Return old head
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  // UNSHIFT - Adding a new NODE to the beginning of the list
  // Create a new node with the value passed to the function
  // If the length is 0
  //// Set the head to be the new node
  //// Set the tail to be the new node
  // Otherwise
  //// Set the prev property on the head of the list to be the new node
  //// Set the next property on the new node to be the head property
  //// Update the head to be the new node
  // Increment the length
  // Return the list
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // GET - retrieve a node by it's position in the list
  // If the index is less than 0 or greater or equal to the length, return null
  // If the index is less than or equal to half the length of the list
  //// Loop through the list starting from the head and loop towards the middle
  //// Return the node once it is found
  // If the index is greater than half the length of the list
  //// Loop through the list starting from the tail and loop towards the middle
  //// Return the node once it is found
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  // SET - changing the VALUE of a node based on it's position in the list
  // This function should accept a value and an index
  // Use your GET function to find the specific node
  // If the node is not found, return false
  // If the node is found, set the value of that node to be the value passed to the function and return true
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // INSERT - Adding a node to the linked list at a SPECIFIC position
  // If the index is less than zero or greater than or equal to the length return false
  // If the index is 0, UNSHIFT
  // if the index is the same as the length, PUSH
  // Use the GET method to access the index - 1
  // Set the next and prev properties on the correct nodes to link everything together
  // Increment the length
  // Return true
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  // REMOVE - removing a node from the list at SPECIFIC POSITION
  // If the index is less than zero or greater than or equal to the length return undefined
  // If the index is 0, SHIFT
  // If the index is the same as the length - 1, POP
  // Use the GET method to retrieve the item to be removed
  // Update the next and prev properties to remove the found node from the list
  // Set next and prev to null on the found node
  // Decrement the length
  // Return the removed node
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  //Print all values to read in the console.
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new DoublyLinkedList();
list.push('hello');
list.push('goodbye');
list.push('spliffy');
list.push('Yo mama');
list.push('wazz up');
// list.pop();
list.shift();
list.unshift('first');
list.set(2, 'Joint');
list.insert(2, 'Smoke this');
list.remove(4);
list.remove(1);
list.remove(0);
list.remove(5);
// console.log(list.get(2));
console.log(list);
// list.reverse();
list.print();
