class Tree {
  constructor (value) {
    this.children = [];
    this.value = value;
  }

  /**
    * add an immediate child
    */
  addChild(child) {
    // check if child is a descendant of the root parent
    if (!this.isDescendant(child)) {
      // push to [children]
      this.children.push(child);
    } else {
      throw new Error('This child is a descendant of root parent!');
    }
    return this;
  };

  /**
    * check to see if the provided tree is already a child of this
    * tree __or any of its sub trees__
    */
  isDescendant(child) {
    // check all children one row level down
    if (this.children.indexOf(child) !== -1) {
      return true;
    }

    // recursive for-loop
    for (let i=0; i<this.children.length;i++) {
      if (this.children[i].isDescendant(child))
        return true;
    }

    return false;
  };

  /**
    * remove an immediate child
    */
  removeAnyChild(child) {
    var index;

    index = this.children.indexOf(child);

    // base case 
    if (index !== -1) {
      this.children.splice(index, 1);
      return true;
    } 
    // recursive
    for (let i=0; i<this.children.length; i++) {
      if (this.children[i].removeAnyChild(child)) {
        // return each tree structure part back up to root tree node
        return this;
      }
    }

    return null;
  };

  /**
    * remove an immediate child
    */
  removeChild(child) {
    if (this.children.length === 0) {
      return this;
    }

    var index = this.children.indexOf(child) 
    
    if (index !== -1) {
      this.children.splice(index, 1);
    }

    return this;
  };

	// returns filtered [results] by traversing through tree recursively via Depth-First
	DFSelect(filter, depth, results) {
		results = results || [];
		depth = depth || 0;

		if (filter(this.value, depth)) {
			results.push(this.value);
		}

		for (var i = 0; i < this.children.length; i++) {
			var child = this.children[i];
			child.DFSelect(filter, depth + 1, results);
		}
		return results;
	};
};
/*
 * Complexity: What is the time complexity of the above functions?
 */  
