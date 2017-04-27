class BinarySearchTree {

	constructor(val) {
	  this.value = val;
	  this.left = null;
	  this.right = null;
	}

	insert(val) {
		// # to insert < currNode's value
		if (val <= this.value) {
			// leftNode val does not exist
			if (this.left === null) {
				this.left = new BinarySearchTree(val)
			// if 'leftNode' val exists
			} else {
				// go to leftNode and check whether can insert to its left/right side
				this.left.insert(val);
			}
			// # to insert > currNode's value
		} else if (val > this.value) {
			// rightNode val does not exist
			if (this.right === null) {
				this.right = new BinarySearchTree(val)
			// if 'leftNode' val exists
			} else {
				// go to rightNode and check whether can insert to its left/right side
				this.right.insert(val);
			}
		}
	};

	contains(target) {
		if (this.value === target) {
			return true;
			// check to see if left exists and target is < currNode's value
		} else if (this.left && target < this.value) {
			// see if leftChildNode === target
			this.left.contains(target);
			//check to see if right exists and target is greater than currNode
		} else if (this.right && target > this.value) {
			// see if rightChildNode === target
			this.right.contains(target);
		}
		return false;
	};
  
	// apply callback depthFirst
	depthFirst(cb) {
		// first do callback on currBSTNode
		cb(this.value);
		// check currBSTNode for left/right childNodes
		// if - check for leftmost first  
		if (this.left) {
			this.left.depthFirst(cb);
		} else {
			this.right.depthFirst(cb);
		}
	}
};
