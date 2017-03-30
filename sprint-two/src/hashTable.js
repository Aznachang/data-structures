 

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  // call hashing function - get a Bucket #
  var index = getIndexBelowMaxForKey(key, storageLimit);
  
  // check to see if Bucket contains any items!
  if (!this.storage[index]){
    this.storage[index] = [[key, value]];
  } 
  	// bucket contains items
  	else{
    var inserted = false;

    for(var i = 0; i < this.storage[index].length; i++){
      // bucket finds an existing key
      if (this.storage[index][i][0] === key) {
        // update key's value with new value
        storage[index][i][1] = value;
        inserted = true;
      }
    }
    // if no existing key found
    if(inserted === false){
    	// push whole [key, value] pair
      storage[index].push([key,value]);
    }
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

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, storageLimit);
  if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
  } else{
      for (var i = 0; i < storage[index]; i++){
        if(storage[index][i][0] ===  key){
          delete storage[index][i];
        }
      }
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


