
var Set = function() {
  this._storage = {}; 
  this.numberOfValues = 0;
};

Set.prototype.add = function(item) { // O(1);
  this.numOfValues++;
  this._storage[item] = true;
};

Set.prototype.contains = function(item) { // O(n);
  return item in this._storage;
};

Set.prototype.remove = function(item) { //O(n)
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      this.numberOfValues--;
      delete this._values.splice(index,1);
    }
  }
};
