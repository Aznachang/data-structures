var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) 
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === child.value) {
      return true;
    }
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].isDescendant(child)) {
      // `child` is descendant of this tree
      return true;
    }
  }
  return false; 
};

treeMethods.contains = function(target) { // O(n);
  var result = false;
  var searchChild = function(child) {
    if (child.value === target) {
      return true;
    } else {
      for (var i = 0; i < child.children.length; i++) {
        result = searchChild(child.children[i]);
      }
    }
    return result;
  }; 
  return searchChild(this);
};

Tree.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

// returns filtered [results] by traversing through tree recursively via Depth-First
Tree.DFSelect = function(filter, depth, results) {
  results = results || [];
  depth = depth || 0;

  if (filter(this.value, depth)) {
    results.push(this.value);
  }

  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.DFSelect(filter, depth + 1, results);
  }
  return results;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */  
