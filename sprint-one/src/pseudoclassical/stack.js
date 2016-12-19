var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.vSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.vSize] = value;
  this.vSize++;

  return value;
};

Stack.prototype.pop = function() {
  var temp;

  if (this.vSize > 0) {
    temp = this.storage[this.vSize - 1];
    delete this.storage[this.vSize - 1];
    this.vSize--;

    return temp;
  }
};

Stack.prototype.size = function() {
  return this.vSize;
};