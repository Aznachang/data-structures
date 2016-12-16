var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  this.children.push(tree);
};


treeMethods.contains = function(target) {
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


/*
 * Complexity: What is the time complexity of the above functions?
 */  
