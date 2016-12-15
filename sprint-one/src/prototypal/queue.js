var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.top = 0;
  someInstance.head = 0;
  someInstance.storage = {};
  someInstance.tail = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.top++;
    this.tail++;
  },
  dequeue: function() {
    if ( this.top > 0 ) {
      var data = this.storage[this.head];
       delete this.storage[this.head];
       this.head++;
       this.top--;
       return data;
    }
  },
  size: function() {
    return this.top;
  } 
};


