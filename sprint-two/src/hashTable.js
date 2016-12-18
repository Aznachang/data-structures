 

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { //O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var innerArray = [];
  if (this._storage.get(index) === undefined) {
    innerArray.push([k, v]);
    this._storage.set(index, innerArray);
  } else {
    var result = this._storage.get(index);
    result.push([k, v]);
    this._storage.set(index, result);
  }
};

HashTable.prototype.retrieve = function(k) { //O(n)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  var result1;
  for (var i = 0; i < result.length; i++) {
    var innerArray = result[i];
    if (innerArray[0] === k) {
      result1 = innerArray[1];
    }
  }  
  return result1;
};

HashTable.prototype.remove = function(k) { //O(n)
  var index = getIndexBelowMaxForKey(k, this._limit); 
  var result = this._storage.get(index);
  for (var i = 0; i < result.length; i++) {
    var innerArray = result[i];
    if (innerArray[0] === k) {
      innerArray.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


