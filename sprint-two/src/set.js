
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};
var count = 0;
setPrototype.add = function(item) { // O(1);
  count++;
  this._storage[count] = item;
};

setPrototype.contains = function(item) { // O(n);
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) { //O(n)
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      delete this._storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 