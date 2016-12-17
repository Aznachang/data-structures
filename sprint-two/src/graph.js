

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};
 
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // O(1)
  var index = this.nodes.indexOf(node);
  this.nodes.splice(index, 1);
  for (var i = 0; i < this.edges.length; i++) {
    var index1 = this.edges.indexOf(obj);
    var obj = this.edges[i];
     if (obj[node]) {
        this.edges.splice(index1, 1);
     }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    var obj = this.edges[i];
    if (obj.hasOwnProperty(fromNode) && obj[fromNode] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // O(1)
  var emptyObj = {};
  emptyObj[fromNode] = toNode;
  emptyObj[toNode] = fromNode;
  this.edges.push(emptyObj);
};

// Remove an edge between any two specified (by value) nodes 
Graph.prototype.removeEdge = function(fromNode, toNode) { // O(1)
  for (var i = 0; i < this.edges.length; i++) {
    var index1 = this.edges.indexOf(obj);
    var obj = this.edges[i];
     if (obj[fromNode]) {
        this.edges.splice(index1, 1);
     }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // O(n);`  `
  this.nodes.forEach(function(node) {
    cb(node);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


