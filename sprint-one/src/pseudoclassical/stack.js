var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.vSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.vSize++] = value;
  
  return value;
};

Stack.prototype.pop = function(val) {
	// check if there are any values in the stack
	if (this._size === 0) {return null;}

	for (var key in this._storage) {
		if (this._storage[key] === val) {
			delete this._storage[key];
			this._size--;
			return this._storage;
			// return this.getMin();
		}
	} 

	return this._storage;
};

Stack.prototype.popTop = function() {
  var temp;
  
  if (this.vSize > 0) {
    temp = this.storage[this.vSize - 1];
    delete this.storage[this.vSize - 1];
    this.vSize--;

    return temp;
  }
};

Stack.prototype.getMin = function() {
	var min = this._storage[0];

	for (var key in this._storage) {
		if (this._storage[key] < min) {
			min = this._storage[key];
		}
	}

	return min;
};

Stack.prototype.size = function() {
  return this.vSize;
};
