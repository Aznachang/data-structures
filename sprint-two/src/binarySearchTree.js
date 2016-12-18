var BinarySearchTree = function(value) {
  var instances = {};
  instances.value = value;
  instances.right = null;
  instances.left = null;
  _.extend(instances, instanceMethods);
  return instances;
};

var instanceMethods = {};

instanceMethods.insert = function(val) {
  if (this.value > val) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (this.value < val) {
    if (this.right === null ) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};
instanceMethods.contains = function(val) {
 
 if (this.value === val) {
  return true;
  //'target val' is greater than 'current node value'
 } else if (this.right && this.value < val) {
  return this.right.contains(val);
  //'target val' is less than 'current node value'
 } else if (this.left && this.value > val) {
   return this.left.contains(val);
 }
 return false;
};
instanceMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  } else if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
 

/*
 * Complexity: What is the time complexity of the above functions?
 */
 