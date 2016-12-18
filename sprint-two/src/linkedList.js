var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { //O(1)
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() { //O(1);
    var result = list.head;
    list.head = list.head.next;
    return result.value;
  };

  list.contains = function(target) { // O(n)
    var searchNode = function(obj) {
      if ( obj.value === target) {
        return true;
      } else if (obj.next) {
        return searchNode(obj.next);
      } else {
        return false;
      }
    };
    return searchNode(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
