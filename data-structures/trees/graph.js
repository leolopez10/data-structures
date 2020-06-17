// ======================================================================
// Graph
// ======================================================================

// - Vertex: a node
// - Edge: connection between nodes
// - Weighted/Unweighted: values assigned to distances between vertices
// - Undirected Graph: two way connections (like a doubly linked list)
// - Direct Graph: one way connection. direction is given to an edge (like a singly linked list)
// - Weighted: each edge has a value assigned to it
// - Unweighted: edge does not have a value assigned to it
// - Graphs are stored in a matrix, List, or hash table
// - If you don't have a lot of edges use a list or hash table

// ADJACENCY LIST

// - Can take up less space (in sparse graphs (less connections))
// - Faster to iterate over all edges
// -- Can be Slower to lookup specific edge
// We will use this to code because Most data in the real-world tends to lend itself to sparser and/or larger graphs

// ADJACENCY MATRIX

// -- Takes up more space (in sparse graphs (less connections))
// -- Slower to iterate over all edges
// - Faster to look up specific edge

// ======================================================================
// BIG O            ADJACENCY LIST          ADJACENCY MATRIX
// Add Vertex       O(1)                    O(|V^2|)
// Add Edge         O(1)                    O(1)
// Remove Vertex    O(|V| + |E|)            O(|V^2|)
// Remove Edge      O(|E|)                  O(1)
// Query            O(|V| + |E|)            O(1)
// Storage          O(|V| + |E|)            O(|V^2|)
// ======================================================================

// ======================================================================
// Code
// ======================================================================
// Building an undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Write a method called addVertex, which accepts a name of a vertex
  // It should add a key to adjacency list with the name of the vertex and st its value to be an empty array
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // This function should accept two vertices, we can call them vertex1, vertex2
  // The function should find in the adjacency list the key of vertex1 and vertex2 to the array
  // The function should find in the adjacency list the key of vertex2 and push vertex 1 to the array
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // This function should accept two vertices, call them vertex 1 and vertex2
  // The function should reassign the key of vertex1 to be an array the does not contain vertex2
  // The function should reassign the key of vertex2 to be an array the does not contain vertex1
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  // The function should accept a vertex to remove
  // The function should loop as long as there are any other verticies in the adjacency list from that vertex
  // Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  // delete the key in the adjacency list for that vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('Los Angeles');
g.addVertex('Hong Kong');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
// g.addEdge('Hong Kong', 'Tokyo');
// g.addEdge('Hong Kong', 'Dallas');
// g.addEdge('Los Angeles', 'Hong Kong');
// g.addEdge('Los Angeles', 'Aspen');
console.log(g);
