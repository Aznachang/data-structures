var LinkedList = function() {
	// THESE ARE JUST NODE POINTERS
	// POINTERS TO NODES (value, 'next' pointer)
	this.head = null; // contains node
	// cur. Last LinkedList node
	this.tail = null; // contains node
};

// iterative
LinkedList.prototype.reverseLinkedList = function(head) {
	let prev = null;
	let curr = head;
	let next;

	while(curr) {
		// next - points to currNode's pointer
		next = curr.next;
		curr.next = prev;
		// previousNode --> currNode
		prev = curr;
		// currNode - currNode's pointer 'next' Node
		curr = next;
	}
	return prev;
};

//recursive
LinkedList.prototype.reverseLinkedList = function(head) {
	// check to see if head.next exists 
	if (!head.next) { return head; }

	const nextNode = head.next;
	const newHead = reverseLinkedList(nextNode);

	head.next = null;
	nextNode.next = head;

	return newHead;
};

// cannot use 'this' - regular function
LinkedList.prototype.makeNode = function(value) {
	var newNode = {};
	newNode.value = value;
	newNode.next = null;	// points to newNode
	return newNode;
};

LinkedList.prototype.addToTail = function(value) {
	// pass-in value to newNode and have empty pointer
	var newTail = this.makeNode(value);

	// check if there exists even a Node
	if (this.head === null) {
		this.head = newTail;
		// add to tailEnd of LinkedList if there is a headNode
	} else {
		// currTailNode's next (pointer to nextNode) should be null
		this.tail.next = newTail;
	}
	// set newTail
	this.tail = newTail;
};

LinkedList.prototype.removeHead = function() {
	var currHeadNode = this.head;

	// check to see if there is a headNode 
	if (this.head === null) {
		return null;
		// if headNode and tailNode same --> only one Node in LinkedList!
	} else if (this.head === this.tail) {
		this.head = this.tail = null;
	} else {
		this.head = this.head.next;
	}

	return currHeadNode;
};

LinkedList.prototype.contains = function(target) {
	// start at the headNode of the Chain!
	var currNode = this.head;

	// check to see if there is a Node currently to process
	while (currNode) {
		if (currNode.value === target) { return true; }

		currNode = currNode.next;
	} 

	return false;
};
