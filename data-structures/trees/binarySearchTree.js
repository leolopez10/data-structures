// ======================================================================
// Binary Search Tree (BST)
// ======================================================================

//ROOT - The top node in a Tree
// CHILD - A node directly connected to another node when moving away from the root
// PARENT - The conversion notion of a child
// SIBLINGS - a group of nodes with the same parent
// LEAF - a node with no children
// EDGE - the connection between one node and another

// Tree real world concept
//     - HTML DOM
//     - Network Routing
//     - Abstract Syntax Trees
//     - Decision Tree AI
//     - Folder in others
//     - computer file system

// Binary Search Tree
//     - Every parent node has at most TWO children
//     - Every node to the LEFT of a parent node is ALWAYS LESS than the parent node
//     - Every node to the RIGHT of a parent node is ALWAYS GREATER than the parent node

// ======================================================================
// BIG O
// Insertion - O(logN)
// Searching - O(logN)
// ======================================================================

// ======================================================================
// Code
// ======================================================================
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // INSERT - adding a new node to the tree
  // Create a new node
  // Starting at the root
  //    - Check if there is a root, if not - the root now becomes the new node!
  //    - If there is a root, check if the value of the new node is greater than or less than the value of the root
  //    - If it is greater
  //        - Check to see if the there is a node to the right
  //            - If there is, move to that node and repeat these steps
  //            - If there is not, add that node s the right property
  //    - If it is less
  //        - Check to see if the there is a node to the left
  //            - If there is, move to that node and repeat these steps
  //            - If there is not, add that node s the left property
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // FIND - searching for a node
  // Staring at the root
  //    - Check if there is a root, if not - we're done searching
  //    - If there is a root, check if the value of the new node is the value we are looking for. If we found it we are done.
  //    - If not, check to see if the value is greater than or less than the value of the root
  //    - If it is greater
  //        - Check to see if there is a node to the right
  //            - If there is, move to that node and repeat these steps
  //            - If there is not, we're done searching!
  //    - If it is less
  //        - Check to see if there is a node to the left
  //            - If there is, move to that node and repeat these steps
  //            - If there is not, we're done searching!
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Breadth First Search
  // Create a queue (this can be ann array) and a variable to store the values of nodes visited
  // Place the root node in the queue
  // Loop as long as there is anything in the queue
  //  - Dequeue a node from the queue and push the value of the node into the variable tha stores the nodes
  //  - If there is  left property on the node dequeued - add it to the queue
  //  - If there is a right property on then ode dequeued - add it to the queue
  // Return the variable that stores the values
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value); // tpicallu just the node (only doing value to check )
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // Depth First Search PreOrder
  // Create a variable to store the values of nodes visited
  // Store the root of the BST in a variable called current
  // Write a helper function which accepts a node
  // - Push the value of the node to the variable that stores the values
  // - If the node has a left property , call the helper function with the left property on the node
  // - If the node has a right property, call the helper function with the right property on the node
  // Invoke the helper function with the current variable
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  // Depth First Search PostOrder
  // Create variable to store the values of nodes visited
  // Store the root of the BSY in a variable called current
  // Wright a helper function which accepts a node
  //  - If the node has left property, call the helper function with the left property on the node
  //  - If the node has a right property, call the helper function with the right property on the node
  //  - Push the value of the node to the variable that stores the values
  //  - Invoke the helper function with the current variable
  // Return the array of values
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  // Depth First Search InOrder
  // Create a variable to store the values of nodes visited
  // Store the root of the BST in a variable called current
  // Write a helper function which accepts a node
  //  - If the node has a left property, call the helper function with the left property on the node
  //  - push the value of the node to the variable that stores the values
  //  - If the node has a right property, call the helper function with the right property, call the helper function with the right property on the node
  // Invoke the helper function with the current variable
  // Return the array of values
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
