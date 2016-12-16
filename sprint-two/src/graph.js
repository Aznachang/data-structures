

// Instantiate a new graph
var Graph = function() {
  this.edges = {};
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
   this.nodes[node] = node; // O(1);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node] === node) { // O(1)
    return true;
  } 
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // O(1)
  if (this.nodes[node]) {
    delete this.nodes[node]; 
    var result = this.edges[node];
    delete this.edges[node];
    delete this.edges[result];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edges[fromNode] === toNode) { //O(1)
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // O(1)
  this.edges[fromNode] = toNode; 
  this.edges[toNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes 
Graph.prototype.removeEdge = function(fromNode, toNode) { // O(1)
  delete this.edges[fromNode];
  delete this.edges[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // O(n);
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


