class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  addLast(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    // we can use the get metthod to find the last node
    const lastNode = this.get(this.length - 1);
    lastNode.next = newNode;
    return this;
  }

  // set a value at a specific index
  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.data = value;
      return true;
    }
    return false;
  }
  //Shift and unshift
  unshift(value) {
    this.addFirst(value);
    return this;
  }
  //Insert a value at a specific index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.addLast(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    return true;
  }
}

const list = new LinkedList();
console.log("initial head: ", list.head);
list.addFirst(10);
console.log("head after adding 10 at the beginning: ", list.head);
list.addLast(20);
console.log("head after adding 20 at the end: ", list.head);
list.insert(1, 15);
console.log("head after inserting 15 at index 1: ", list.head);
list.set(0, 5);
console.log("head after setting index 0 to 5: ", list.head);
console.log("value at index 1: ", list.get(1).data);
