var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.vSize = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  //First Time Called: [] - no keys!
  var keys = Object.keys(this.storage);
  //First Time Called: latest = keys[-1];
  var latest = keys[keys.length - 1];
  
  //add value to index '1' greater than current 'size' of 'keys' from {storage}
  this.storage[latest + 1] = value;
  this.vSize++;
  return value;
};

Queue.prototype.dequeue = function() {
  
  if (this.vSize > 0) {
    var keys = Object.keys(this.storage);
    var temp = this.storage[keys[0]];

    delete this.storage[keys[0]];
    this.vSize--;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.vSize;
};

