var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var head = 0; 
  var tail = 0;
  var size = 0; 

  someInstance.enqueue = function(value) {
   storage[tail] = value;
   size++;
   tail++;
   
  };

  someInstance.dequeue = function() {
    if( size > 0 ) {
      var data = storage[head];
       delete storage[head];
       head++;
       size--;
       return data;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

// 2(head) 3 4 5 6 7 8(tail)