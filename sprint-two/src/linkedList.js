var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
    }
    if (list.tail) {
      list.tail.next = newTail;
    }

    // assign new TailEnd Node
    list.tail = newTail;
  };

  list.removeHead = function() {
    var currHead = list.head;

    // check to see if a headNode exists
    if (list.head === null) {
      return null; // empty linked-list
    }

    list.head = list.head.next;
    return currHead.value; // return value of previous headNode
  };

// recursive
list.contains = function(target) {
  var searchNode = function(obj) {
    if ( obj.value === target) {
      return true;
    } else if (obj.next) {
      return searchNode(obj.next)
    } else {
      return false;
    }
  }
    return searchNode(list.head);
  };

  return list;
};

// iterative
list.contains = function(target) {

  var node = list.head;

  while (node) {
    if (node.value === target) {
      return true;
    }
    node = node.next;
  }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
