// ======================================================================
// Singly Linked List
// ======================================================================

// A data structure that contains a HEAD, TAIL, and LENGTH property
// Linked Lists consist of nodes, and each NODE has VALUE and a POINTER to another node or null
// Singly Linked Lists are excellent alternatives to arrays when insertion and deletion at the beginning are frequently required
// Arrays contain a built in index whereas Linked LIsts do not
// The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues

// ======================================================================
// Comparisons with Arrays
// Lists
// // Do not have indexes!
// // Connected via nodes with a NEXT pointer
// // Random Access is not allowed
// ================================================
// Arrays
// // Indexed in order!
// // Insertion and deletion can be expensive
// // Can quickly be accessed at a specific index
// ======================================================================

// ======================================================================
// BIG O
// Insertion = O(1)
// Removal = O(1) or O(n)
// Searching = O(n)
// Access = O(n)
// ======================================================================

// ======================================================================
// Code
// ======================================================================
// piece of data - val
// reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // PUSH - adds a node to the end of the list
  // This function should accept a value
  // Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be the newly created node
  // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  // Increment the length by one
  // Return the link list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // POP - remove a node from the end of the list
  // This function should not accept any values
  // Loop through the list until you reach the tail
  // Set the next property of the 2nd to last nod to be null
  // Set the tail to be the 2nd to last node
  // Decrement the length of the list by 1
  // Return the value of the node removed
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
    // console.log(current.val);
    // console.log(newTail.val);
  }

  // SHIFT - Removing a new node from the beginning of the list
  // If there is no nodes, return undefined
  // Store the current head property in a variable
  // Set the head property to be the current head's next property
  // Decrement the length by 1
  // Return the value of the node removed
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // UNSHIFT - Adding a new NODE to the beginning of the list
  // This function should accept a value
  // Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be the newly created node.
  // Otherwise set the newly created node's new property to be the current head property on the list
  // Set the head property on the list to be that newly created node
  // Increment the length of the list by 1
  // return the linked list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // GET - retrieve a node by it's position in the list
  // This function should accept an index
  // If the index is less than zero or greater than or equal to the length of the list, return null
  // Loop through the list until you reach the index and return the node at that specific value
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
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
  // If the index is less than zero or greater than the length, return false
  // if the index is the same as the length, push a new node to the end of the list
  // If the index is zero, unshift a new node to the start of the list.
  // Otherwise, using the GET method, access the node at the index -1
  // Set the next property of that node to be the new node
  // Set the next property on the new node to be the previous next
  // Increment the length
  // Return true
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // REMOVE - removing a node from the list at SPECIFIC POSITION
  // If the index is less than zero or greater than the length, return undefined
  // If the index is the same as the length minus 1, pop
  // If the index is zero, shift
  // Set the next property on that node to be the next of th next node
  // Decrement the length
  // Return the value of the node removed
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // REVERSE - reverse the list in place
  // Swap the head and tail
  // Create a variable called next
  // Create a variable called prev
  // Create a variable called node and initialize it to the head property
  // Loop through the list
  // Set next to be the next property on whatever node is
  // Set next to be the next property on whatever prev is
  // Set prev to be the value of the node variable
  // Set the node variable to be the value of the next variable
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
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

const list = new SinglyLinkedList();
list.push('hello');
list.push('goodbye');
list.push('spliffy');
list.push('Yo mama');
list.push('wazz up');
list.unshift('first');
list.set(3, 'Joint');
list.insert(3, 'Smoke this');
// list.remove(3);
// list.remove(1);
// list.remove(0);
// console.log(list.get(3));
// console.log(list);
list.reverse();
list.print();
