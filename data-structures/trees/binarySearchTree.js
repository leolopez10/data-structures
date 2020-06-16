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
    var current = this.root,
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
    var current = this.root,
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
}

const tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
console.log(tree);
